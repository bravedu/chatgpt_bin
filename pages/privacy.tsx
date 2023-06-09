import type { AppProps } from 'next/app'

function Privacy({ Component, pageProps }: AppProps) {
  return (
    <div className='privacy'>
      <h3 className='text-xl'>隐私协议</h3>
      <br />
      <div className='text-indent'>
      欢迎使用我们的服务。我们非常注重保护您的隐私和个人信息，并致力于为您提供安全、稳定和可靠的服务。在您使用我们的服务时，请您遵守以下隐私协议：
      </div>
      <br />
      <div className='text-indent'>
        不要在工作内容中包含公司机密信息。在使用我们的服务时，您不应该在工作内容中包含任何公司机密信息，例如商业计划、财务信息、客户信息等敏感信息。我们强烈建议您遵守相关法律法规，并对您在使用我们的服务时可能涉及的机密信息负责。
      </div>
      <br />
      <div className='text-indent'>
      不要将机密信息传递给未授权的第三方。我们承诺，不会向未授权的第三方披露您的机密信息。但是，在一些情况下，我们可能需要与我们的合作伙伴共享一些信息。在这种情况下，我们将仅向合作伙伴提供必要的信息，并要求他们同样保护您的机密信息。
      </div>
      <br />
      <div className='text-indent'>
      对于您提供的信息，我们将采取安全措施加以保护。我们采取各种安全措施来保护您的个人信息和公司机密信息，包括技术措施和管理措施。我们会采用加密技术来保护您的信息，防止未经授权的访问、使用、修改或泄露。我们会对数据进行备份，以防数据丢失。同时，我们也会对我们的员工和合作伙伴进行教育，确保他们了解并遵守我们的隐私协议。
      </div>
      <br />
      <div className='text-indent'>我们将遵守相关的法律法规，以保护您的隐私和公司机密信息。</div>
      <div className='text-indent'>
      隐私协议的更新我们保留随时更新隐私协议的权利。在更新后，我们将通过网站公告、电子邮件等途径告知您相关内容的变更。
      </div>
      <br />
      <div>
      请您在使用我们的服务前，仔细阅读并理解本隐私协议。如果您不同意本隐私协议的任何内容，请勿使用我们的服务。如果您对本隐私协议有任何疑问或意见，请随时与我们联系。
      </div>
    </div>
  )
}

export default Privacy
