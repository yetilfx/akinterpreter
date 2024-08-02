from typing import Generator
from .step_data import StepData
from .blueprint_builder import BluePrintBuilder
from .blueprint_coder import BluePrintCoder
from .blueprint_executor import BluePrintExecutor
from .blueprint_reporter import BluePrintReporter
from .step_model_collection import StepModelCollection

class BluePrint:
    def __init__(self):
        self.blueprint_builder = BluePrintBuilder()
        self.blueprint_coder = None
        self.blueprint_executor =None
        self.blueprint_reporter = None
        self._blueprint =None
        self.max_retry = 3
        self.step_data = StepData()
    
    @property
    def blueprint(self)->StepModelCollection:
        return self._blueprint
    
    def build_blueprint(self,query:str)->Generator[dict[str,any],None,None]:
        yield from self.blueprint_builder.build_blueprint(query)
        self._blueprint = self.blueprint_builder.blueprint

    def modify_blueprint(self,query:str,steps:dict[str,any])->Generator[dict[str,any],None,None]:
        yield from self.blueprint_builder.modify_blueprint(query)
        self._blueprint = self.blueprint_builder.blueprint
    
    def generate_code(self,step_info:dict[str,any])->Generator[dict[str,any],None,None]:
        if self._blueprint is None:
            raise Exception("请先生成蓝图")
        if self.blueprint_coder is None:
            self.blueprint_coder = BluePrintCoder(self._blueprint,self.step_data)
        if self.blueprint_executor is None:
            self.blueprint_executor = BluePrintExecutor(self._blueprint,self.step_data) 
        for step in self._blueprint:
            yield from self.blueprint_coder.generate_step(step)
            yield from self.blueprint_executor.excute_step(step)
        if self.blueprint_reporter is None:
            self.blueprint_reporter = BluePrintReporter(self._blueprint,self.step_data)
        yield from self.blueprint_reporter.report()
    
