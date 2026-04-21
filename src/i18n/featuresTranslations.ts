export const featuresTranslations = {
  en: {
    // Page header
    page_title: 'Features',
    page_subtitle: 'Proven technology with a fresh approach',
    chip1: '10+ Protocol Features',
    chip2: 'Native DEX',
    chip3: 'NFTs Built-In',
    chip4: 'No Runtime Overhead',

    // Act I — Protocol Layer
    act1_label: 'Protocol Layer',

    // Hooks statement
    proto_section_label: 'Programmability',
    proto_h3_line1: 'Hooks: Account-Level',
    proto_h3_line2: 'Smart Contract Logic',
    proto_para1:
      'Xahau introduces Hooks—a unique form of on-ledger smart contract logic that runs directly at the account level. Unlike smart contracts on most blockchains that require interacting with external contract addresses, Hooks are lightweight programs embedded inside user accounts themselves. These Hooks can automatically inspect, modify, or reject any transaction involving that account, without the need for explicit function calls.',
    proto_para2:
      'Because Hooks are executed inline and within consensus, they offer real-time programmability with minimal overhead. This allows for powerful use cases such as rejecting unauthorized token transfers, triggering actions on deposits, or implementing compliance logic—all without slowing down the network. Hooks represent a new security and programmability paradigm, making accounts active participants in transaction logic.',

    // DEX detail
    dex_label: 'Exchange',
    dex_h4: 'Offers: Built-In Decentralized Exchange (DEX)',
    dex_para1:
      "Xahau includes a native Offers system, powering a built-in decentralized exchange on the ledger. Users can create Offer entries to buy or sell assets (such as tokens or issued currencies) directly on the network, and these offers are automatically matched by the protocol's order book.",
    dex_para2:
      "Unlike many blockchains that require smart contracts or external platforms for trading, Xahau's DEX is a first-class feature of the ledger. This on-ledger exchange offers fast settlement and low fees, making asset trading seamless for users and applications.",

    // Fees detail
    fees_label: 'Economics',
    fees_h4: 'Low Fees with Fee Burning',
    fees_para1:
      'Xahau maintains consistently low transaction fees, with a built-in fee-burning model that reduces spam and rewards long-term network health. Every transaction pays a minimal fee in XAH, and a portion of that fee is permanently destroyed—creating a deflationary effect over time.',
    fees_para2:
      'This approach discourages network abuse while preserving accessibility, particularly for high-throughput or cost-sensitive applications. Unlike inflationary models or auction-style fees, Xahau provides predictability and economic alignment for all users.',

    // Performance solo
    perf_label: 'Infrastructure',
    perf_h4: 'Fast, Green, and Scalable',
    perf_para1:
      "Built on a refined version of XRPL's consensus protocol, Xahau offers fast finality, low energy usage, and reliable scalability. Transactions confirm in seconds, with no mining and minimal hardware requirements. The result is a network that can serve real-world financial and enterprise use cases without compromising the environment or user experience.",
    perf_para2:
      "Xahau's architecture is ideal for global payment systems, tokenized asset platforms, or high-volume applications where performance and sustainability are non-negotiable.",

    // Act II — Financial Primitives
    act2_label: 'Financial Primitives',

    // Payments statement
    pay_section_label: 'Payments',
    pay_h3_line1: 'Payments:',
    pay_h3_line2: 'Multi-Asset Transfers',
    pay_h3_line3: '& Channels',
    pay_para1:
      'The Payments functionality in Xahau is designed to facilitate fast, flexible transfer of value across the network. Uniquely, Xahau (like XRPL) supports multi-asset payments through a system of trust lines and issued currencies. Using a TrustSet transaction, two parties can establish a trust line to transact in a custom asset or IOU, enabling built-in support for multiple currencies or tokens without requiring smart contracts.',
    pay_para2:
      'This means businesses can issue stablecoins or tokens on Xahau and users can send or exchange them natively. The Payments suite also includes advanced features like Deposit Preauthorization, which lets an account whitelist who can send it funds, adding security against unwanted transactions.',
    pay_para3:
      "In addition, Xahau supports payment channels for scalability. Payment channels allow two parties to conduct rapid, high-volume transactions off-ledger and then settle the net result on the blockchain. With transactions like PaymentChannelCreate, Fund, and Claim, Xahau enables micropayments or streaming payments that are secured by the ledger but don't congest it.",

    // Tokens detail
    tokens_label: 'Asset Control',
    tokens_h4: 'Token and Asset Control by Design',
    tokens_para1:
      'Xahau gives issuers and users granular control over tokens and trustlines. Features like TrustSet, Clawback, Freeze, and Deposit Authorization allow full customization of how tokens can be used or received. Assets can be whitelisted, blocked, or burned, all enforced at the protocol level.',
    tokens_para2:
      'This makes Xahau uniquely suited for regulated financial instruments, stablecoins, loyalty programs, or enterprise supply chains—any scenario where compliance, safety, and precision are critical.',

    // Rewards detail
    rewards_label: 'Economics',
    rewards_h4: 'Balance Rewards: Passive Yield Without Staking',
    rewards_para1:
      'Xahau offers a Balance Reward system that lets accounts passively accumulate value simply by holding assets. These rewards are calculated based on account balance and distributed through a consensus-enforced mechanism, without requiring staking, delegation, or third-party contracts.',
    rewards_para2:
      "The mechanism is powered by protocol-level logic and on-chain Hooks, ensuring rewards are automatic, fair, and sustainable. Unlike yield farming or staking systems on other blockchains, Xahau's reward model doesn't require users to lock assets or chase complex DeFi strategies—it works natively, with transparency and simplicity.",

    // Escrow detail
    escrow_label: 'Primitives',
    escrow_h4: 'Escrow: Conditional Transfers for Any Asset',
    escrow_para1:
      'Xahau supports on-ledger escrow of both native and issued tokens, enabling secure conditional transfers for a broad range of business and financial use cases. Funds or tokens can be locked with time-based or condition-based release logic, enforced by the network itself.',
    escrow_para2:
      "Whether you're building a milestone-based payment system, marketplace settlement, or trusted token distribution, Xahau's escrows offer a simple yet powerful tool—without the need for external smart contracts. Native support for both fungible and non-fungible assets in escrow makes this a uniquely versatile feature.",

    // Remit detail
    remit_label: 'Payments',
    remit_h4: 'Remit: Native Cross-Account Transfers',
    remit_para1:
      'The Remit feature allows streamlined, multi-operation transactions between accounts—ideal for complex or high-volume payment flows. Instead of sending multiple separate instructions, a single Remit transaction can distribute value to multiple recipients or trigger multiple balance changes atomically.',
    remit_para2:
      "This improves efficiency and reliability, especially for payment processors, marketplaces, or applications that need to perform bundled operations. Because it's built into the protocol, Remit ensures predictable performance, low latency, and strong auditability.",

    // Checks detail
    checks_label: 'Payments',
    checks_h4: 'Checks: Deferred Payment System',
    checks_para1:
      'Xahau supports Checks, a deferred payment system akin to writing digital checks on the blockchain. One party can issue a Check (promise of payment) that the intended recipient may cash at a later time or cancel if needed. This feature allows secure, flexible transactions—for example, a business can issue payment that the receiver will claim when certain conditions are met.',
    checks_para2:
      "The ledger has dedicated transactions for creating a check, cashing it, or canceling it. Few other platforms have this kind of native deferred payment instrument; Xahau's check system provides an extra layer of payment control, all enforced by the network's rules without requiring custom smart contracts.",

    // Act III — Governance & Identity
    act3_label: 'Governance & Identity',

    // Governance statement
    gov_section_label: 'Governance',
    gov_h3_line1: 'Governance Game:',
    gov_h3_line2: 'Decentralized Coordination',
    gov_h3_line3: 'with Purpose',
    gov_para1:
      'Xahau features a novel governance system backed by the Governance Game, a transparent, on-ledger mechanism for proposing, reviewing, and voting on amendments. Validator operators (Governors) participate directly in shaping the protocol, while also competing in a structured reward system based on accountability and engagement.',
    gov_para2:
      'This system ensures that protocol upgrades and policy decisions are open and participatory, not dictated by a centralized entity. It combines the benefits of structured enterprise coordination with the transparency and resilience of decentralized consensus. By gamifying governance in a secure and incentive-aligned way, Xahau sets a new standard for on-chain coordination.',

    // URITokens closing
    uri_label: 'NFTs',
    uri_h4: 'URITokens: Native NFTs on Xahau',
    uri_para1:
      "URITokens represent Xahau's approach to non-fungible tokens (NFTs), implemented as a native part of the ledger rather than via separate smart contracts. A URIToken is a first-class on-ledger object uniquely identified by the issuing account and a Uniform Resource Identifier (URI) that typically points to the token's metadata or content. Only one URIToken with a given URI can exist per account, ensuring true uniqueness for each digital asset.",
    uri_para2:
      'This built-in NFT standard means creators can mint, trade, or burn NFTs with simple transactions (e.g. URITokenMint, URITokenBuy, URITokenBurn) without deploying custom code. The issuer of a URIToken can even allow it to be destroyed (burned) by setting a flag, giving flexibility in how NFTs are managed. By integrating NFTs at the protocol level, Xahau makes issuing and managing digital collectibles or credentials more efficient and secure.',
  },

  es: {
    // Page header
    page_title: 'Características',
    page_subtitle: 'Tecnología probada con un enfoque innovador',
    chip1: '10+ Funciones de Protocolo',
    chip2: 'DEX Nativo',
    chip3: 'NFTs Integrados',
    chip4: 'Sin Sobrecarga de Ejecución',

    // Act I — Protocol Layer
    act1_label: 'Capa de Protocolo',

    // Hooks statement
    proto_section_label: 'Programabilidad',
    proto_h3_line1: 'Hooks: Lógica de Contrato',
    proto_h3_line2: 'Inteligente a Nivel de Cuenta',
    proto_para1:
      'Xahau introduce los Hooks, una forma única de lógica de contrato inteligente on-ledger que se ejecuta directamente a nivel de cuenta. A diferencia de los contratos inteligentes en la mayoría de blockchains, que requieren interactuar con direcciones de contratos externas, los Hooks son programas ligeros incrustados dentro de las propias cuentas de usuario. Estos Hooks pueden inspeccionar, modificar o rechazar automáticamente cualquier transacción que involucre esa cuenta, sin necesidad de llamadas a funciones explícitas.',
    proto_para2:
      'Dado que los Hooks se ejecutan inline y dentro del consenso, ofrecen programabilidad en tiempo real con una sobrecarga mínima. Rechaza transferencias de tokens no autorizadas, desencadena acciones en depósitos, implementa lógica de cumplimiento normativo — todo sin ralentizar la red. Los Hooks representan un nuevo paradigma de seguridad y programabilidad.',

    // DEX detail
    dex_label: 'Exchange',
    dex_h4: 'Ofertas: Exchange Descentralizado (DEX) Integrado',
    dex_para1:
      'Xahau incluye un sistema de Ofertas nativo, que impulsa un exchange descentralizado integrado en el ledger. Los usuarios pueden crear entradas de Oferta para comprar o vender activos directamente en la red; el libro de órdenes del protocolo las empareja automáticamente. Intercambio entre pares sin intermediarios ni plataformas externas.',
    dex_para2:
      'A diferencia de la mayoría de blockchains que necesitan contratos inteligentes para el trading, el DEX de Xahau es una característica de primera clase del ledger — liquidación rápida, bajas comisiones, integración perfecta.',

    // Fees detail
    fees_label: 'Economía',
    fees_h4: 'Bajas Comisiones con Quema de Fees',
    fees_para1:
      'Comisiones de transacción consistentemente bajas, respaldadas por un modelo integrado de quema de fees que reduce el spam y premia la salud a largo plazo de la red. Cada transacción paga una comisión mínima en XAH; una parte se destruye permanentemente — un silencioso efecto deflacionario.',
    fees_para2:
      'A diferencia de los modelos inflacionarios o las comisiones de tipo subasta, Xahau proporciona previsibilidad y alineación económica para todos los usuarios.',

    // Performance solo
    perf_label: 'Infraestructura',
    perf_h4: 'Rápido, Verde y Escalable',
    perf_para1:
      'Construido sobre una versión refinada del protocolo de consenso del XRPL, Xahau ofrece finalidad rápida, bajo consumo de energía y escalabilidad fiable. Las transacciones se confirman en segundos — sin minería, requisitos mínimos de hardware.',
    perf_para2:
      'El resultado es una red que puede servir casos de uso financieros y empresariales del mundo real sin comprometer el medio ambiente ni la experiencia del usuario. Ideal para sistemas de pago globales, activos tokenizados o aplicaciones de alto volumen donde el rendimiento y la sostenibilidad son innegociables.',

    // Act II — Financial Primitives
    act2_label: 'Primitivas Financieras',

    // Payments statement
    pay_section_label: 'Pagos',
    pay_h3_line1: 'Transferencias Multi-Activo',
    pay_h3_line2: 'y Canales de Pago',
    pay_h3_line3: '',
    pay_para1:
      'Xahau soporta pagos multi-activo a través de un sistema de líneas de confianza y monedas emitidas. Usando una transacción TrustSet, dos partes pueden establecer una línea de confianza para transaccionar en cualquier activo personalizado o IOU — soporte integrado para múltiples monedas y tokens, sin contratos inteligentes.',
    pay_para2:
      'Las empresas pueden emitir stablecoins o tokens en Xahau; los usuarios los envían e intercambian de forma nativa. La suite de Pagos también incluye Preautorización de Depósito, que permite a las cuentas incluir en una lista blanca quién puede enviarles fondos — seguridad contra transacciones no deseadas.',
    pay_para3:
      'Y para escala: Xahau soporta canales de pago que permiten transacciones rápidas y de alto volumen fuera del ledger con liquidación on-chain. Micropagos, pagos en streaming — asegurados por el ledger sin congestionarlo.',

    // Tokens detail
    tokens_label: 'Control de Activos',
    tokens_h4: 'Control de Tokens y Activos por Diseño',
    tokens_para1:
      'Control granular sobre tokens y líneas de confianza. TrustSet, Clawback, Freeze y Deposit Authorization permiten una personalización completa de cómo se pueden usar o recibir los tokens. Los activos pueden ser incluidos en listas blancas, bloqueados o quemados — todo aplicado a nivel de protocolo.',
    tokens_para2:
      'Especialmente adecuado para instrumentos financieros regulados, stablecoins, programas de fidelización o cadenas de suministro empresariales donde el cumplimiento normativo, la seguridad y la precisión son críticos.',

    // Rewards detail
    rewards_label: 'Economía',
    rewards_h4: 'Recompensas de Saldo: Rendimiento Pasivo Sin Staking',
    rewards_para1:
      'Las cuentas acumulan valor pasivamente simplemente manteniendo activos. Las recompensas se calculan en función del saldo de la cuenta y se distribuyen mediante un mecanismo aplicado por consenso — sin staking, sin delegación, sin contratos de terceros.',
    rewards_para2:
      'A diferencia del yield farming en otros lugares, el modelo de recompensas de Xahau funciona de forma nativa, transparente y automática.',

    // Escrow detail
    escrow_label: 'Primitivas',
    escrow_h4: 'Escrow',
    escrow_para1:
      'Escrow on-ledger para tokens nativos y emitidos. Los fondos se bloquean con lógica de liberación basada en tiempo o condiciones, aplicada por la propia red — sin contratos inteligentes externos.',
    escrow_para2:
      'Pagos por hitos, liquidación de marketplace, distribución de confianza — soporte nativo para activos fungibles y no fungibles en escrow.',

    // Remit detail
    remit_label: 'Pagos',
    remit_h4: 'Remit',
    remit_para1:
      'Transacciones multi-operación simplificadas entre cuentas. Un solo Remit puede distribuir valor a múltiples destinatarios o desencadenar múltiples cambios de saldo de forma atómica — sin pila de instrucciones separadas.',
    remit_para2:
      'Rendimiento predecible, baja latencia, sólida trazabilidad para procesadores de pago y marketplaces. Integrado en el protocolo.',

    // Checks detail
    checks_label: 'Pagos',
    checks_h4: 'Cheques',
    checks_para1:
      'Un sistema de pago diferido — como escribir cheques digitales on-chain. Emite un Cheque que el destinatario cobra más tarde, o cancela si es necesario. Control de pago adicional, aplicado puramente por las reglas de la red.',
    checks_para2:
      'Pocas plataformas tienen un instrumento de pago diferido nativo. Sin contratos inteligentes personalizados. Solo una primitiva limpia y simple.',

    // Act III — Governance & Identity
    act3_label: 'Gobernanza e Identidad',

    // Governance statement
    gov_section_label: 'Gobernanza',
    gov_h3_line1: 'El Juego de Gobernanza:',
    gov_h3_line2: 'Coordinación Descentralizada',
    gov_h3_line3: 'con Propósito',
    gov_para1:
      'Xahau cuenta con un novedoso sistema de gobernanza respaldado por el Juego de Gobernanza — un mecanismo transparente y on-ledger para proponer, revisar y votar enmiendas. Los operadores de validadores (Gobernadores) participan directamente en la configuración del protocolo, compitiendo en un sistema de recompensas estructurado basado en la responsabilidad y el compromiso.',
    gov_para2:
      'Las actualizaciones del protocolo y las decisiones de política son abiertas y participativas, no dictadas por una entidad centralizada. La coordinación empresarial estructurada se une a la transparencia y resiliencia del consenso descentralizado — estableciendo un nuevo estándar para la coordinación on-chain.',

    // URITokens closing
    uri_label: 'NFTs',
    uri_h4: 'URITokens: NFTs Nativos en Xahau',
    uri_para1:
      'Los URITokens representan el enfoque de Xahau hacia los tokens no fungibles — implementados como una parte nativa del ledger, no mediante contratos inteligentes separados. Un URIToken es un objeto on-ledger de primera clase, identificado de forma única por la cuenta emisora y el URI. Solo puede existir un URIToken con un URI dado por cuenta, garantizando la verdadera unicidad de cada activo digital.',
    uri_para2:
      'Los creadores acuñan, intercambian o queman NFTs con transacciones simples — URITokenMint, URITokenBuy, URITokenBurn — sin desplegar código personalizado. El emisor puede incluso permitir la quema estableciendo un flag. NFTs a nivel de protocolo: más eficientes, más seguros, menos fricción.',
  },

  ja: {
    // Page header
    page_title: '機能',
    page_subtitle: '実証された技術と革新的なアプローチ',
    chip1: '10以上のプロトコル機能',
    chip2: 'ネイティブDEX',
    chip3: 'NFT組み込み済み',
    chip4: '実行オーバーヘッドなし',

    // Act I — Protocol Layer
    act1_label: 'プロトコル層',

    // Hooks statement
    proto_section_label: 'プログラマビリティ',
    proto_h3_line1: 'Hooks：アカウントレベルの',
    proto_h3_line2: 'スマートコントラクトロジック',
    proto_para1:
      'Xahauはアカウントレベルで直接動作するユニークな形式のオンレジャースマートコントラクトロジックであるHooksを導入しています。外部のコントラクトアドレスとの対話を必要とする他のブロックチェーンのスマートコントラクトとは異なり、Hooksはユーザーアカウント自体に組み込まれた軽量なプログラムです。これらのHooksは、明示的な関数呼び出しなしに、そのアカウントに関わるあらゆる取引を自動的に検査、変更、または拒否することができます。',
    proto_para2:
      'Hooksはインラインかつコンセンサス内で実行されるため、最小限のオーバーヘッドでリアルタイムのプログラマビリティを提供します。これにより、不正なトークン転送の拒否、入金時のアクションのトリガー、コンプライアンスロジックの実装などの強力なユースケースが可能になります。Hooksは新しいセキュリティとプログラマビリティのパラダイムを表し、アカウントをトランザクションロジックのアクティブな参加者にします。',

    // DEX detail
    dex_label: '取引所',
    dex_h4: 'オファー：内蔵の分散型取引所（DEX）',
    dex_para1:
      'Xahauはネイティブのオファーシステムを含み、レジャー上の内蔵分散型取引所を動かしています。ユーザーはネットワーク上で直接資産（トークンや発行通貨など）を売買するためのオファーエントリを作成でき、これらのオファーはプロトコルのオーダーブックによって自動的にマッチングされます。',
    dex_para2:
      '取引のためにスマートコントラクトや外部プラットフォームを必要とする多くのブロックチェーンとは異なり、XahauのDEXはレジャーのファーストクラスの機能です。このオンレジャー取引所は高速決済と低手数料を提供し、ユーザーやアプリケーションにとってシームレスな資産取引を実現します。',

    // Fees detail
    fees_label: 'エコノミクス',
    fees_h4: '手数料燃焼による低手数料',
    fees_para1:
      'Xahauは一貫して低い取引手数料を維持し、スパムを減らしてネットワークの長期的な健全性を報酬する組み込みの手数料燃焼モデルを持っています。各取引はXAHで最小限の手数料を支払い、その手数料の一部は永久に破壊され、時間とともにデフレ効果をもたらします。',
    fees_para2:
      'このアプローチはネットワークの乱用を抑止しながらアクセシビリティを維持します。インフレモデルやオークション形式の手数料とは異なり、Xahauはすべてのユーザーに予測可能性と経済的整合性を提供します。',

    // Performance solo
    perf_label: 'インフラストラクチャ',
    perf_h4: '高速、グリーン、スケーラブル',
    perf_para1:
      'XRPLのコンセンサスプロトコルの洗練されたバージョンの上に構築されたXahauは、高速なファイナリティ、低エネルギー使用量、信頼性の高いスケーラビリティを提供します。取引は数秒で確認され、マイニングなし、最小限のハードウェア要件で行われます。その結果、環境やユーザーエクスペリエンスを損なうことなく、実世界の金融およびエンタープライズのユースケースに対応できるネットワークが実現します。',
    perf_para2:
      'Xahauのアーキテクチャは、パフォーマンスと持続可能性が交渉の余地のないグローバル決済システム、トークン化資産プラットフォーム、または高ボリュームアプリケーションに最適です。',

    // Act II — Financial Primitives
    act2_label: '金融プリミティブ',

    // Payments statement
    pay_section_label: '決済',
    pay_h3_line1: '支払い：マルチアセット',
    pay_h3_line2: '転送とチャンネル',
    pay_h3_line3: '',
    pay_para1:
      'Xahauの支払い機能は、ネットワーク全体での価値の高速かつ柔軟な転送を容易にするように設計されています。Xahauはトラストラインと発行通貨のシステムを通じてマルチアセット支払いをサポートし、スマートコントラクトを必要とせずに複数の通貨やトークンの組み込みサポートを可能にします。',
    pay_para2:
      'これは、企業がXahau上でステーブルコインやトークンを発行し、ユーザーがそれらをネイティブに送受信または交換できることを意味します。支払いスイートには、口座に資金を送れる人をホワイトリスト化できる入金事前承認など、不要な取引に対するセキュリティを追加する高度な機能も含まれています。',
    pay_para3:
      'さらに、Xahauはスケーラビリティのためのペイメントチャンネルをサポートしています。ペイメントチャンネルにより、2者がオフレジャーで高速・大量の取引を行い、その後正味の結果をブロックチェーン上で決済することができます。PaymentChannelCreate、Fund、Claimなどのトランザクションにより、Xahauはレジャーによって保護されるがそれを混雑させないマイクロペイメントやストリーミングペイメントを可能にします。',

    // Tokens detail
    tokens_label: '資産管理',
    tokens_h4: '設計によるトークンと資産の制御',
    tokens_para1:
      'Xahauは発行者とユーザーにトークンとトラストラインに対する詳細な制御を与えます。TrustSet、Clawback、Freeze、Deposit Authorizationなどの機能により、トークンの使用方法や受け取り方を完全にカスタマイズできます。資産はホワイトリスト化、ブロック、または燃焼させることができ、すべてプロトコルレベルで適用されます。',
    tokens_para2:
      'これにより、Xahauは規制された金融商品、ステーブルコイン、ロイヤルティプログラム、エンタープライズサプライチェーンなど、コンプライアンス、安全性、精度が重要なシナリオに特に適しています。',

    // Rewards detail
    rewards_label: 'エコノミクス',
    rewards_h4: '残高報酬：ステーキングなしのパッシブ収益',
    rewards_para1:
      'Xahauは残高報酬システムを提供しており、アカウントが資産を保有するだけで価値を受動的に積み立てることができます。これらの報酬はアカウント残高に基づいて計算され、ステーキング、委任、サードパーティのコントラクトを必要とせず、コンセンサスによって適用されるメカニズムを通じて分配されます。',
    rewards_para2:
      'このメカニズムはプロトコルレベルのロジックとオンチェーンHooksによって支えられており、報酬が自動的、公正、持続可能であることを保証します。他のブロックチェーンのイールドファーミングやステーキングシステムとは異なり、Xahauの報酬モデルはユーザーが資産をロックしたり複雑なDeFi戦略を追いかけたりする必要がありません。',

    // Escrow detail
    escrow_label: 'プリミティブ',
    escrow_h4: 'エスクロー：あらゆる資産の条件付き転送',
    escrow_para1:
      'Xahauはネイティブおよび発行済みトークンのオンレジャーエスクローをサポートし、幅広いビジネスおよび金融ユースケースのための安全な条件付き転送を可能にします。資金またはトークンは、ネットワーク自体によって適用される時間ベースまたは条件ベースのリリースロジックでロックできます。',
    escrow_para2:
      'Xahauのエスクローは外部のスマートコントラクトを必要とせず、シンプルながら強力なツールを提供します。エスクローにおける代替可能および代替不可能な資産の両方に対するネイティブサポートにより、この機能は特に多用途です。',

    // Remit detail
    remit_label: '決済',
    remit_h4: 'Remit：ネイティブのクロスアカウント転送',
    remit_para1:
      'Remit機能により、アカウント間での合理化されたマルチオペレーション取引が可能になり、複雑または大量の支払いフローに最適です。複数の個別の命令を送信する代わりに、単一のRemit取引が複数の受取人に価値を配布したり、複数の残高変更をアトミックにトリガーしたりできます。',
    remit_para2:
      'これにより、特に支払い処理業者、マーケットプレイス、またはバンドル操作を実行する必要があるアプリケーションの効率性と信頼性が向上します。プロトコルに組み込まれているため、Remitは予測可能なパフォーマンス、低レイテンシ、および強力な監査可能性を保証します。',

    // Checks detail
    checks_label: '決済',
    checks_h4: 'チェック：繰延決済システム',
    checks_para1:
      'Xahauはブロックチェーン上でデジタル小切手を書くような繰延決済システムであるチェックをサポートしています。一方が後で現金化するか、必要に応じてキャンセルできるチェック（支払いの約束）を発行できます。この機能により、安全で柔軟な取引が可能になります。',
    checks_para2:
      'レジャーにはチェックの作成、現金化、またはキャンセルのための専用トランザクションがあります。Xahauのチェックシステムは、カスタムスマートコントラクトを必要とせず、ネットワークのルールによってすべて適用される追加の支払い制御層を提供します。',

    // Act III — Governance & Identity
    act3_label: 'ガバナンスとアイデンティティ',

    // Governance statement
    gov_section_label: 'ガバナンス',
    gov_h3_line1: 'ガバナンスゲーム：',
    gov_h3_line2: '目的を持った',
    gov_h3_line3: '分散型調整',
    gov_para1:
      'Xahauはガバナンスゲームに裏付けられた新しいガバナンスシステムを特徴としています。これは、修正案を提案、審査、投票するための透明でオンレジャーのメカニズムです。バリデーターオペレーター（ガバナー）は、説明責任とエンゲージメントに基づく構造化された報酬システムで競いながら、プロトコルの形成に直接参加します。',
    gov_para2:
      'このシステムにより、プロトコルのアップグレードとポリシー決定が、中央集権的なエンティティによって指示されるのではなく、オープンで参加型になることが保証されます。構造化されたエンタープライズ調整の利点と、分散型コンセンサスの透明性と回復力を組み合わせています。安全でインセンティブに沿った方法でガバナンスをゲーム化することで、Xahauはオンチェーン調整の新しい基準を設定します。',

    // URITokens closing
    uri_label: 'NFT',
    uri_h4: 'URITokens：XahauのネイティブNFT',
    uri_para1:
      'URITokensは、別のスマートコントラクトを介してではなく、レジャーのネイティブな部分として実装されたXahauの非代替トークン（NFT）へのアプローチを表しています。URITokenは、発行アカウントとトークンのメタデータやコンテンツを通常指すUniform Resource Identifier（URI）によって一意に識別される、ファーストクラスのオンレジャーオブジェクトです。アカウントごとに特定のURIを持つURITokenは1つしか存在できず、各デジタル資産の真の独自性を確保します。',
    uri_para2:
      'この組み込みNFT標準により、クリエイターはカスタムコードをデプロイすることなく、シンプルな取引（例：URITokenMint、URITokenBuy、URITokenBurn）でNFTをミント、取引、または燃焼させることができます。URITokenの発行者はフラグを設定することで破壊（燃焼）を許可することもでき、NFTの管理方法に柔軟性を与えます。プロトコルレベルでNFTを統合することで、Xahauはデジタルコレクティブルや資格情報の発行・管理をより効率的かつ安全にします。',
  },
}

export type FeaturesLocale = keyof typeof featuresTranslations
