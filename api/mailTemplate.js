const formatCurrency = (number) => {
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  return formatter.format(number)
}
export default function mailTemplate(params, features, baseURL) {
  const [firstName, lastName, email, telephone, companyName, companyRole, lowEnd, highEnd] = params
  const featuresQuery = encodeURIComponent(JSON.stringify(features))
  return `<div style="position: relative; padding: .5rem;border: solid #f0f0f0;min-width: 0;  word-wrap: break-word; background-color: #fff; background-clip: border-box; border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
  <h1 style="text-align:center;background-color:#542ea4;color:#fff;padding: .75rem 1.25rem;margin-bottom: 0; border-bottom: 1px solid rgba(0,0,0,.125);">App Price Estimation</h1>
  <table style="width:100%;margin-bottom:1rem;border-spacing:2px;border-color:grey;">
    <tbody style="text-align:left;">
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">First Name:</th>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${firstName}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Last Name:</th>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${lastName}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Email:</th>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${email}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Phone Number:</th>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${telephone}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Company Name:</th>
        <td style="padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-collapse:collapse;">${companyName}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Company Role:</th>
        <td style="padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-collapse:collapse;">${companyRole}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Low End Price:</th>
        <td style="padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-collapse:collapse;">${formatCurrency(lowEnd)}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">High End Price:</th>
        <td style="padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-collapse:collapse;">${formatCurrency(highEnd)}</td>
      </tr>
    </tbody>
    <caption style="caption-side:bottom;padding:10px"></caption>
  </table>
  <div style="padding:5%;text-align:center;">
  <a href="${baseURL}/user-selected-features?features=${featuresQuery}" style="color: #fff;background:#542ea4;border: none;padding: .9rem 2.25rem;font-size: .9rem;text-decoration:none;font-weight:500;">View Selected Features</a>
  </div>
</div>`
}
