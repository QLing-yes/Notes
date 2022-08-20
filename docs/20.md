## `explain()`函数

<find()>.`explain(<string>)`返回详细的执行计划和执行情况等信息

- `queryPlanner`模式：执行计划的详细信息
- `executionStats`模式：计划的执行情况
- `allPlansExecution`模式:  所有
- executionStages.stage 对照表:

| 状态            | 描述                                   |
| --------------- | -------------------------------------- |
| COLLSCAN        | 全表扫描                               |
| IXSCAN          | 索引扫描                               |
| FETCH           | 通过索引检索指定文档                   |
| SHARD_MERGE     | 将各个分片返回数据进行合并             |
| SORT            | 在内存中进行了排序                     |
| LIMIT           | 使用limit限制返回数                    |
| SKIP            | 使用skip进行跳过                       |
| IDHACK          | 对_id进行查询                          |
| SHARDING_FILTER | 对分片进行查询                         |
| COUNTSCAN       | count不使用index进行count时的stage返回 |
| COUNT_SCAN      | count使用了Index进行count时的stage返回 |
| SUBPLA          | 未使用到索引的$or查询的stage返回       |
| TEXT            | 使用全文索引进行查询时候的stage返回    |
| PROJECTION      | 限定返回字段时候stage的返回            |

## [索引](https://www.mongodb.com/docs/manual/core/index-single/)

- indexes() - 获取所有索引
- dropIndex(`<indexName>`) - 删除索引

### 创建简单索引

`<collection>.createIndex({ <keys:options> },{ unique: false, background: true })`

- keys : 创建索引的**字段**
- options - 索引类型: `1`,`-1`, `'text'`
  1.  `1`升序，`-1`降序。
  2. `text` - 在find时将您的 **文本查询** 扩展到该字段;
- unique: 是否唯一键
- background: 是否后台(非阻塞型多线程)
- 复合索引: 拥有多个`<keys:options>`属性

### 读取

读取符合索引将使用索引

```js
<collection>.find(
    { keys:value },
    { 
        sort: {},
        projection: {},
        skip:1,
        //...
    }
);
```

- `sort(<Number>)` -  文档的返回顺序顺序 `1`升序 `-1`降序 (对应索引选项一(`<keys:options>`)时) 将通过索引查找
- `limit(<Number>)` - 限制返回数量
- `skip(<Number>)` - 从返回结果跳过前n个
- `project({ <keys: 1 | 0> })` 挑选返回字段(`1`包含, `0`排除)

> 运算符 https://www.mongodb.com/docs/v6.0/reference/operator/query/

## 文本查询

`find({ $text: { $search: "<包含以下>" } })`

- 单词: `xxx`
  1. 查询包含xxx的; 

-  短语: `\"xxx sss\"`
- 排除查询: `-`
  1. `xxx -\"sss\"` 包含xxx且不包含sss的

> TIP

1. 可用**空格**分隔多个查询
2. 可对字段单独使用
3. 建议对需要文本查询的字段建立`text`类型索引

## [部分API](https://www.mongodb.com/docs/manual/reference/method/)

