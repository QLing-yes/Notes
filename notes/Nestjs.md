## tip

- **路由通配符**`?`, `+`, `*`, 和`()`

- [重定向](https://docs.nestjs.com/controllers#redirection)

- [RECIPES工具](https://docs.nestjs.com/recipes/crud-generator)

## 控制器

- [路由参数](https://docs.nestjs.com/controllers#route-parameters)

  ```typescript
  //url: http://127.0.0.1:3000/e/w
  @Get(':id/:xx')
  getTest(@Param() params): string {
      console.log(params);//{ id: 'e', xx: 'w' }
      return "OK";
  }
  ```

- 子域路由`@Controller({ host: 'www.ling-in.top' })`(Fastify不支持)

  1. `@HostParam('www')`

- 路径前缀`@Controller('cats')`

- [请求有效载荷](https://docs.nestjs.com/controllers#request-payloads)

  1. `ValidationPipe`会过滤掉不规范荷载

  ```typescript
  export class CreateCatDto {//官方建议使用类
      //荷载白名单
    name: string;
    age: number;
  }
  ```

  ```typescript
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  ```

- @Res

  > `@Res()`或`@Response()`处理程序时，将置于**库特定模式**，并且**您将负责管理响应**（例如，`res.json(...)`或）来发出某种响应`res.send(...)`，否则 HTTP 服务器将挂起。
  > 失去依赖于Nest标准响应处理的Nest功能的兼容性，例如拦截器和`@HttpCode()`/`@Header()`装饰器。要解决此问题，您可以将`passthrough`选项设置为`true`，如下所示：

  ```typescript
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }
  ```

## Provide / Injec

**@Inject**

```typescript
import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
    @Inject('HTTP_OPTIONS')
    private readonly httpClient: T;
    //or
    constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}
```

注册

```typescript
//app.module.ts
@Module({ providers: [HttpService] })
export class AppModule {}
```

[手动实例化](https://docs.nestjs.com/providers#manual-instantiation)

