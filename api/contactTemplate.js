export default function contactTemplate(params) {
  return `<div style="position: relative; padding: .5rem;border: solid #f0f0f0;min-width: 0;  word-wrap: break-word; background-color: #fff; background-clip: border-box; border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;">
  <h1 style="text-align:center;background-color:#542ea4;color:#fff;padding: .75rem 1.25rem;margin-bottom: 0; border-bottom: 1px solid rgba(0,0,0,.125);">Contact Email</h1>
  <table style="width:100%;margin-bottom:1rem;border-spacing:2px;border-color:grey;">
    <tbody style="text-align:left;">
      <tr>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${params.name}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Email:</th>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${params.email}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Phone Number:</th>
        <td style="padding: .75rem;border-top: 1px solid #dee2e6;border-collapse:collapse;">${params.telephone}</td>
      </tr>
      <tr>
        <th style="color: #fff;background-color: #3b3b3b;border-color: #454d55;vertical-align: bottom;border-bottom: 2px solid #dee2e6;padding: .75rem;border-top: 1px solid #dee2e6;border-collapse: collapse;">Details</th>
        <td style="padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-collapse:collapse;">${params.messages}</td>
      </tr>
    </tbody>
    <caption style="caption-side:bottom;padding:10px"></caption>
  </table>
</div>`
}
