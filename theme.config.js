const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Nayab Warach. Made with ♡ using <a href="https://github.com/NextJSTemplates/startup-nextjs">a NextJS Template.</a>
    </small>
  )
}
