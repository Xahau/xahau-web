import type { Locale } from './locales'

export type FraudReportTranslations = {
  frontmatter: {
    title: string
    description: string
  }
  intro: {
    body: string
    warning: string
    lead: string
    bullets: string[]
    steps: {
      title: string
      body: string
    }[]
    expectationTitle: string
    expectations: string[]
    expectationWarning: string
  }
  form: {
    successTitle: string
    successBody: string
    reportIdLabel: string
    reportIdFallback: string
    errorTitle: string
    addressLabel: string
    addressPlaceholder: string
    addressHint: string
    descriptionLabel: string
    descriptionPlaceholder: string
    descriptionHint: string
    urlLabel: string
    urlPlaceholder: string
    urlHint: string
    categoryLabel: string
    categoryPlaceholder: string
    categoryOptions: {
      value: string
      label: string
    }[]
    categoryHint: string
    contactLabel: string
    contactPlaceholder: string
    contactHint: string
    requiredFields: string
    submitLabel: string
    submitAnotherLabel: string
    optional: string
  }
  privacy: {
    title: string
    bullets: string[]
  }
  attribution: {
    prefix: string
    label: string
    suffix: string
  }
  messages: {
    captchaIncomplete: string
    captchaFailed: string
    submitting: string
    submitFailed: string
    networkError: string
  }
}

export const fraudReportTranslations: Record<Locale, FraudReportTranslations> =
  {
    en: {
      frontmatter: {
        title: 'Report Fraud',
        description: 'Have you been scammed or hacked? Here is what to do!',
      },
      intro: {
        body: 'Xahau is a public blockchain, with no governing party that can freeze or retrieve funds, close accounts, or otherwise keep people from their assets.',
        warning: "We can't reverse or cancel transactions, no-one can.",
        lead: 'We can flag accounts used for illicit activity, which will:',
        bullets: [
          'Be included in our API that exchanges and other entities are using for AML compliance to monitor deposits, and possibly withhold illicit funds.',
          'Movement of funds will be auto-traced and we will receive notifications whenever they move, no matter how old the case is.',
          'In case of a scam, warn other users through wallet software and exchanges using our API, not to send funds to a flagged account.',
        ],
        steps: [
          {
            title: '1. Submit the address to Xahau Forensics',
            body: 'We maintain the largest fraudulent address registry on Xahau and it is used by several entities to combat illicit activity.',
          },
          {
            title: '2. Report your case to law enforcement',
            body: 'Report it to the local police and if your country has an online report form for cybercrime or financial crime, report it there as well.',
          },
          {
            title: '3. Follow up on your police report',
            body: 'We work with law enforcement. Let them know that we have the information. The odds are that we are also in contact with other victims and can help law enforcement combine cases across jurisdictions and provide actionable intelligence.',
          },
        ],
        expectationTitle: 'What can you expect?',
        expectations: [
          "We can't reverse or cancel transactions, no-one can.",
          'We do our best to have funds seized when they leave Xahau, by working with exchanges and other off ramps through our fraudulent address registry API and by manually making contact.',
          'When you report an account to us, you can expect us to treat your report with as much attention as any other report.',
          'We get many reports every single day. If an account is added to our fraudulent address registry, we are taking the best care of it along with all other cases.',
          'If money is seized we will contact you, if you have left us a way to contact you.',
          'To reclaim funds you have to work with law enforcement for paperwork.',
        ],
        expectationWarning:
          "We monitor hundreds of cases at the same time and can't hold hands on a case-by-case basis. We will only contact you if we have good news!",
      },
      form: {
        successTitle: 'Success!',
        successBody:
          'Thank you for your report. It has been submitted successfully.',
        reportIdLabel: 'Report ID:',
        reportIdFallback: 'unknown',
        errorTitle: 'Error',
        addressLabel: 'Xahau Address',
        addressPlaceholder: 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        addressHint:
          'Enter the Xahau address associated with the fraudulent activity',
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Describe the fraudulent activity',
        descriptionHint:
          'Provide as much detail as possible to help us investigate',
        urlLabel: 'URL',
        urlPlaceholder: 'Optional URL related to the fraud',
        urlHint:
          'Provide a URL if relevant, for example a scam website or social media post',
        categoryLabel: 'Suggested Category',
        categoryPlaceholder: 'Select a category...',
        categoryOptions: [
          { value: 'giveaway', label: 'Giveaway' },
          { value: 'theft', label: 'Theft' },
          { value: 'other', label: 'Other' },
        ],
        categoryHint: 'Help us categorize the type of fraud',
        contactLabel: 'Contact Information',
        contactPlaceholder:
          'Optional contact information, for example e-mail, X handle or Telegram username',
        contactHint:
          "Provide contact info if you're willing to help with follow-up questions",
        requiredFields: 'Required fields',
        submitLabel: 'Submit Report',
        submitAnotherLabel: 'Submit Another Report',
        optional: 'Optional',
      },
      privacy: {
        title: 'Privacy & Security',
        bullets: [
          "This form uses ALTCHA, a privacy-compliant CAPTCHA that doesn't track you",
          'Your report is submitted securely to the Xahau Forensics network',
          'Reports are reviewed and used to improve network security',
          'No personal information is required to submit a report',
        ],
      },
      attribution: {
        prefix: 'Xahau Forensics is run by ',
        label: 'INFTF',
        suffix: '.',
      },
      messages: {
        captchaIncomplete:
          'Please complete the CAPTCHA verification before submitting.',
        captchaFailed:
          'CAPTCHA verification failed. Please complete the challenge and try again.',
        submitting: 'Submitting...',
        submitFailed: 'Failed to submit report. Please try again.',
        networkError:
          'Network error: Unable to connect to the server. Please check your connection and try again.',
      },
    },
    es: {
      frontmatter: {
        title: 'Reportar Fraude',
        description:
          'Has sido estafado o hackeado? Aqui tienes lo que debes hacer.',
      },
      intro: {
        body: 'Xahau es una blockchain publica, sin una entidad gobernante que pueda congelar o recuperar fondos, cerrar cuentas o impedir de otro modo que las personas accedan a sus activos.',
        warning: 'No podemos revertir ni cancelar transacciones. Nadie puede.',
        lead: 'Podemos marcar cuentas utilizadas para actividades ilicitas, lo que permitira:',
        bullets: [
          'Incluirlas en nuestra API que utilizan exchanges y otras entidades para supervisar depositos con fines de cumplimiento AML y, en algunos casos, retener fondos ilicitos.',
          'Rastrear automaticamente los movimientos de fondos y recibir notificaciones cada vez que se muevan, sin importar la antiguedad del caso.',
          'En caso de estafa, advertir a otros usuarios a traves del software de billeteras y de exchanges que utilizan nuestra API para que no envien fondos a una cuenta marcada.',
        ],
        steps: [
          {
            title: '1. Envia la direccion a Xahau Forensics',
            body: 'Mantenemos el mayor registro de direcciones fraudulentas en Xahau y varias entidades lo utilizan para combatir actividades ilicitas.',
          },
          {
            title: '2. Denuncia tu caso ante las autoridades',
            body: 'Informalo a la policia local y, si tu pais dispone de un formulario online para ciberdelitos o delitos financieros, presentalo tambien alli.',
          },
          {
            title: '3. Da seguimiento a tu denuncia policial',
            body: 'Trabajamos con las autoridades. Hazles saber que tenemos informacion. Es muy probable que tambien estemos en contacto con otras victimas y podamos ayudar a combinar casos entre distintas jurisdicciones y aportar inteligencia util.',
          },
        ],
        expectationTitle: 'Que puedes esperar?',
        expectations: [
          'No podemos revertir ni cancelar transacciones. Nadie puede.',
          'Hacemos todo lo posible para que los fondos sean retenidos cuando salen de Xahau, trabajando con exchanges y otras rampas de salida tanto mediante nuestra API de direcciones fraudulentas como por contacto directo.',
          'Cuando nos reportas una cuenta, puedes esperar que tratemos tu reporte con la misma atencion que cualquier otro.',
          'Recibimos muchos reportes cada dia. Si una cuenta se agrega a nuestro registro de direcciones fraudulentas, la atenderemos con el mejor cuidado posible junto con todos los demas casos.',
          'Si se recupera dinero, nos pondremos en contacto contigo siempre que nos hayas dejado una forma de hacerlo.',
          'Para recuperar fondos debes trabajar con las autoridades para la documentacion correspondiente.',
        ],
        expectationWarning:
          'Supervisamos cientos de casos al mismo tiempo y no podemos dar seguimiento individualizado a cada uno. Solo te contactaremos si tenemos buenas noticias.',
      },
      form: {
        successTitle: 'Envio correcto',
        successBody: 'Gracias por tu reporte. Se ha enviado correctamente.',
        reportIdLabel: 'ID del reporte:',
        reportIdFallback: 'desconocido',
        errorTitle: 'Error',
        addressLabel: 'Direccion de Xahau',
        addressPlaceholder: 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        addressHint:
          'Introduce la direccion de Xahau asociada con la actividad fraudulenta',
        descriptionLabel: 'Descripcion',
        descriptionPlaceholder: 'Describe la actividad fraudulenta',
        descriptionHint:
          'Proporciona todos los detalles posibles para ayudarnos a investigar',
        urlLabel: 'URL',
        urlPlaceholder: 'URL opcional relacionada con el fraude',
        urlHint:
          'Incluye una URL si es relevante, por ejemplo un sitio fraudulento o una publicacion en redes sociales',
        categoryLabel: 'Categoria sugerida',
        categoryPlaceholder: 'Selecciona una categoria...',
        categoryOptions: [
          { value: 'giveaway', label: 'Sorteo falso' },
          { value: 'theft', label: 'Robo' },
          { value: 'other', label: 'Otro' },
        ],
        categoryHint: 'Ayudanos a clasificar el tipo de fraude',
        contactLabel: 'Informacion de contacto',
        contactPlaceholder:
          'Informacion de contacto opcional, por ejemplo correo, usuario de X o Telegram',
        contactHint:
          'Facilita un medio de contacto si estas dispuesto a responder preguntas de seguimiento',
        requiredFields: 'Campos obligatorios',
        submitLabel: 'Enviar reporte',
        submitAnotherLabel: 'Enviar otro reporte',
        optional: 'Opcional',
      },
      privacy: {
        title: 'Privacidad y seguridad',
        bullets: [
          'Este formulario usa ALTCHA, un CAPTCHA compatible con la privacidad que no te rastrea',
          'Tu reporte se envia de forma segura a la red de Xahau Forensics',
          'Los reportes se revisan y se utilizan para mejorar la seguridad de la red',
          'No se requiere informacion personal para enviar un reporte',
        ],
      },
      attribution: {
        prefix: 'Xahau Forensics es operado por ',
        label: 'INFTF',
        suffix: '.',
      },
      messages: {
        captchaIncomplete:
          'Completa la verificacion CAPTCHA antes de enviar el formulario.',
        captchaFailed:
          'La verificacion CAPTCHA ha fallado. Completa el desafio e intentalo de nuevo.',
        submitting: 'Enviando...',
        submitFailed: 'No se pudo enviar el reporte. Intentalo de nuevo.',
        networkError:
          'Error de red: no se pudo conectar con el servidor. Comprueba tu conexion e intentalo de nuevo.',
      },
    },
    ja: {
      frontmatter: {
        title: '不正を報告',
        description:
          '詐欺やハッキングの被害に遭いましたか。取るべき対応を案内します。',
      },
      intro: {
        body: 'Xahau はパブリックブロックチェーンであり、資金を凍結したり取り戻したり、アカウントを停止したり、利用者が資産へアクセスすることを妨げたりできる中央管理者は存在しません。',
        warning: '取引を巻き戻したり取り消したりすることは誰にもできません。',
        lead: 'ただし、不正行為に使われたアカウントにフラグを付けることはでき、以下につながります。',
        bullets: [
          '取引所やその他の組織がAMLコンプライアンス目的で入金監視に利用するAPIに登録され、不正資金の保留につながる可能性があります。',
          '資金移動は自動追跡され、どれだけ古い事件でも移動があれば通知を受け取れます。',
          '詐欺事案では、当社APIを利用するウォレットソフトや取引所を通じて、他の利用者へ送金しないよう警告できます。',
        ],
        steps: [
          {
            title: '1. Xahau Forensicsにアドレスを送信する',
            body: '私たちはXahau上で最大規模の不正アドレスリストを運用しており、複数の組織が不正対策のために利用しています。',
          },
          {
            title: '2. 事案を法執行機関へ届け出る',
            body: '近くの警察へ届け出てください。お住まいの国にサイバー犯罪や金融犯罪のオンライン通報窓口がある場合は、そちらにも提出してください。',
          },
          {
            title: '3. 警察への届け出を継続的にフォローする',
            body: '私たちは法執行機関と連携しています。必要な情報を保有していることを伝えてください。他の被害者とも接点を持っている可能性が高く、法域をまたぐ事案の統合や実務に使える情報提供を支援できることがあります。',
          },
        ],
        expectationTitle: '期待できること',
        expectations: [
          '取引を巻き戻したり取り消したりすることはできません。これは誰にもできません。',
          '資金がXahauの外に出る段階で差し押さえにつながるよう、私たちは不正アドレス登録APIや個別連絡を通じて、取引所やその他の出口事業者と連携を試みます。',
          'アカウントを報告いただいた場合、他の報告と同様に真摯に取り扱います。',
          '私たちは毎日多数の報告を受けています。アカウントが不正アドレスリストに追加された場合は、他の全案件と同様に最善を尽くして対応します。',
          '資金が差し押さえられた場合は、連絡先を残していただいていればご連絡します。',
          '資金回収には、必要書類のため法執行機関との連携が必要です。',
        ],
        expectationWarning:
          '私たちは同時に数百件の案件を監視しており、個別のサポートはできません。良い進展があった場合にのみご連絡します。',
      },
      form: {
        successTitle: '送信完了',
        successBody: 'ご報告ありがとうございました。正常に送信されました。',
        reportIdLabel: 'レポートID:',
        reportIdFallback: '不明',
        errorTitle: 'エラー',
        addressLabel: 'Xahauアドレス',
        addressPlaceholder: 'rXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        addressHint: '不正行為に関連するXahauアドレスを入力してください',
        descriptionLabel: '説明',
        descriptionPlaceholder: '不正行為の内容を説明してください',
        descriptionHint:
          '調査の助けになるよう、できるだけ詳しく記載してください',
        urlLabel: 'URL',
        urlPlaceholder: '不正に関連する任意のURL',
        urlHint: '詐欺サイトやSNS投稿など、関連するURLがあれば入力してください',
        categoryLabel: '想定カテゴリ',
        categoryPlaceholder: 'カテゴリを選択してください...',
        categoryOptions: [
          { value: 'giveaway', label: '偽のギブアウェイ' },
          { value: 'theft', label: '盗難' },
          { value: 'other', label: 'その他' },
        ],
        categoryHint: '不正の種類の分類にご協力ください',
        contactLabel: '連絡先',
        contactPlaceholder:
          '任意の連絡先: メール、Xのアカウント、Telegramユーザー名など',
        contactHint: '追加の確認に協力いただける場合は連絡先を記入してください',
        requiredFields: '必須項目',
        submitLabel: 'レポートを送信',
        submitAnotherLabel: '別のレポートを送信',
        optional: '任意',
      },
      privacy: {
        title: 'プライバシーとセキュリティ',
        bullets: [
          'このフォームでは、追跡を行わないプライバシー配慮型CAPTCHAのALTCHAを利用しています',
          'レポートはXahau Forensicsネットワークへ安全に送信されます',
          'レポートは審査され、ネットワークの安全性向上に利用されます',
          'レポート送信に個人情報は必須ではありません',
        ],
      },
      attribution: {
        prefix: 'Xahau Forensicsの運営元は',
        label: 'INFTF',
        suffix: 'です。',
      },
      messages: {
        captchaIncomplete: '送信前にCAPTCHA認証を完了してください。',
        captchaFailed:
          'CAPTCHA認証に失敗しました。チャレンジを完了して再度お試しください。',
        submitting: '送信中...',
        submitFailed:
          'レポートを送信できませんでした。もう一度お試しください。',
        networkError:
          'ネットワークエラー: サーバーに接続できませんでした。接続を確認して再度お試しください。',
      },
    },
  }
