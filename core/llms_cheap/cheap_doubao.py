from core.utils.config_setting import Config
from ..llms.doubao_client import DoubaoApiClient

class CheapDoubao(DoubaoApiClient):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        config = Config()
        endpoint = config.get("volcengine_doubao")
        if endpoint :
            self.model = endpoint
        else:
            raise Exception("未配置volcengine_doubao")