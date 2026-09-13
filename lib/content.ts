export type ContentSection = {
  heading: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  meta: string;
  status: string;
  summary: string;
  sections: ContentSection[];
};

export type Note = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  sections: ContentSection[];
};

export const projects: Project[] = [
  {
    slug: 'tiny-runtime',
    name: 'tiny-runtime',
    description: '用尽可能小的模型，理解任务调度与并发。',
    meta: 'C · Systems',
    status: '概念示例',
    summary: '一个用于解释运行时基本机制的概念项目。重点不是功能数量，而是让每一次任务切换都有迹可循。',
    sections: [
      {
        heading: '想解决什么',
        paragraphs: [
          '“并发”经常先以抽象名词出现，真正的行为却藏在调度队列、状态转换和时序里。这个示例把范围收窄到任务创建、让出执行权与结束三个动作。',
          '目标是让读代码的人能回答：当前是谁在运行？下一次为什么轮到它？任务结束后资源如何回收？',
        ],
      },
      {
        heading: '设计思路',
        paragraphs: [
          '用显式任务状态和可打印的事件日志替代隐藏的魔法。先实现可重复的单线程调度，再考虑计时器与 I/O；每增加一种能力，都保留一个可以独立运行的最小示例。',
        ],
      },
      {
        heading: '后续可扩展',
        paragraphs: [
          '加入简单的性能计数、任务取消和可视化时间线。页面也可以逐步补上真实代码链接、测试结果与设计取舍。',
        ],
      },
    ],
  },
  {
    slug: 'packet-lab',
    name: 'packet-lab',
    description: '把网络诊断结果整理成可读的事实。',
    meta: 'Rust · Networking',
    status: '原型示例',
    summary: '一个面向开发者的网络诊断工具原型：先呈现可验证的观察，再给出谨慎的推断。',
    sections: [
      {
        heading: '想解决什么',
        paragraphs: [
          '网络故障容易被一句“连接失败”概括，但 DNS、TCP、TLS 和应用响应是不同的环节。诊断工具应让每一步的耗时与结果清晰可见。',
        ],
      },
      {
        heading: '设计思路',
        paragraphs: [
          '输出按时间顺序排列：解析地址、建立连接、协商安全连接、读取响应。错误消息直接指向失败阶段，不把猜测包装成结论。',
          '命令行输出保持纯文本友好，便于复制到问题报告；结构化格式则留给自动化脚本。',
        ],
      },
      {
        heading: '后续可扩展',
        paragraphs: [
          '补充跨平台测试、可选的 JSON 输出以及诊断结果对比。真实项目上线时，可以在这里加入仓库地址与使用示例。',
        ],
      },
    ],
  },
  {
    slug: 'plain-notes',
    name: 'plain-notes',
    description: '以纯文本为源头的技术笔记发布流程。',
    meta: 'TypeScript · Web',
    status: '构想示例',
    summary: '一个轻量写作系统的页面示例：内容归作者所有，发布过程尽量透明。',
    sections: [
      {
        heading: '想解决什么',
        paragraphs: [
          '技术笔记不一定需要复杂后台。更重要的是，内容能长期保存、方便迁移，并且修改历史可以追溯。',
        ],
      },
      {
        heading: '设计思路',
        paragraphs: [
          '用 Markdown 文件保存正文，标题、摘要和标签作为少量元数据。构建时生成静态页面，避免读者访问时依赖数据库。',
          '编辑体验先围绕写作本身设计：本地预览、链接检查、发布日期校验，而不是增加更多面板。',
        ],
      },
      {
        heading: '后续可扩展',
        paragraphs: [
          '加入 RSS、全文搜索与文章间的关联阅读，同时让没有 JavaScript 的浏览器也能正常阅读。',
        ],
      },
    ],
  },
];

export const notes: Note[] = [
  {
    slug: 'complexity',
    title: '软件的复杂度，通常从“以后也许会用”开始',
    category: '工程判断',
    readingTime: '约 3 分钟',
    summary: '在需求尚未出现时，先为每一种可能性留接口，往往是在借未来的不确定性增加今天的维护成本。',
    sections: [
      {
        heading: '把可能性与需求分开',
        paragraphs: [
          '“以后也许会用”不是一个无效的担忧，但它也不等于已经发生的需求。一个抽象层如果没有第二个真实使用者，很难验证它的边界是否恰当。',
          '可以先记录潜在变化点，而不是立即把每个变化点都做成配置项。这样保留了思考，也保留了修改设计的自由。',
        ],
      },
      {
        heading: '为修改留下空间',
        paragraphs: [
          '简单不等于把所有东西写在一起。清晰的模块边界、准确的命名和可靠的测试，往往比提前建立通用框架更能降低未来的改动成本。',
          '当第二个场景真正出现，再比较它和第一个场景的共同点。那时做出的抽象，通常比今天的猜测更小、更准确。',
        ],
      },
    ],
  },
  {
    slug: 'web-performance',
    title: '如何设计一次无框架的 Web 性能实验',
    category: 'Web 实验',
    readingTime: '约 4 分钟',
    summary: '比较技术方案之前，先让实验条件、衡量指标和可重复步骤保持一致。',
    sections: [
      {
        heading: '先定义问题',
        paragraphs: [
          '“更快”可以指首次可见、能够交互、页面切换，或弱网下的稳定性。实验应该先选定场景，再挑选指标。否则一个方案在某项数字上占优，不代表它改善了使用体验。',
        ],
      },
      {
        heading: '控制变量',
        paragraphs: [
          '让两版页面拥有相同的内容、图片大小和功能。记录设备、网络与缓存状态，并多次运行；单次截图更适合说明现象，不适合给出结论。',
          '最后同时报告结果与代价：开发复杂度、可维护性、无障碍支持，以及后续内容更新的便利程度。',
        ],
      },
    ],
  },
  {
    slug: 'reading-code',
    title: '读代码时，先找什么',
    category: '阅读方法',
    readingTime: '约 3 分钟',
    summary: '理解陌生代码，先找输入、状态与输出，再去追每一个细节。',
    sections: [
      {
        heading: '从边界开始',
        paragraphs: [
          '先确定程序接收什么、产生什么，以及失败时如何表现。入口函数和公开接口通常比内部工具函数更能说明系统的责任。',
        ],
      },
      {
        heading: '画出状态变化',
        paragraphs: [
          '沿着一次真实请求或一次用户操作，记下关键状态如何改变。不要一开始就逐行阅读整个仓库；先建立一个能被验证的心智模型。',
          '当模型与测试、日志或运行结果冲突时，优先修改模型。这比记住更多细节更有用。',
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
