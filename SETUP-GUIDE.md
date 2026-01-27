# GIM-VEA Setup Guide

## Email Configuration (Resend)

### Current Status
Your Resend API key has been configured in `.env.local`. The contact form is ready to send emails!

### Important: Domain Setup

#### What's Configured Now
- API Key: ✅ Added
- FROM_EMAIL: Currently set to `onboarding@resend.dev` (Resend's default test domain)
- TO_EMAIL: Set to `monika@gim-vea.com`

#### Domain Verification (Recommended for Production)

**Using `onboarding@resend.dev` (Current Setup):**
- ✅ Works immediately - no setup required
- ✅ Good for testing and initial deployment
- ⚠️ Limited to 100 emails per day
- ⚠️ Emails come from "onboarding@resend.dev" instead of your domain

**Using Your Own Domain (Recommended for Production):**
To send emails from `noreply@gim-vea.com` or `contact@gim-vea.com`:

1. **Add Domain in Resend Dashboard**
   - Go to https://resend.com/domains
   - Click "Add Domain"
   - Enter `gim-vea.com`

2. **Add DNS Records**
   Resend will provide DNS records to add to your domain registrar:
   - SPF record (TXT)
   - DKIM record (TXT)
   - DMARC record (TXT)

   These verify you own the domain and improve email deliverability.

3. **Update .env.local**
   Once verified, change:
   ```
   FROM_EMAIL=noreply@gim-vea.com
   ```
   or
   ```
   FROM_EMAIL=contact@gim-vea.com
   ```

4. **Restart Dev Server**
   ```bash
   npm run dev
   ```

### Testing the Contact Form

1. **Start the development server:**
   ```bash
   cd gim-vea
   npm run dev
   ```

2. **Navigate to the contact page:**
   - Open http://localhost:3000/contact
   - Fill out the form
   - Submit

3. **Check your email:**
   - Check `monika@gim-vea.com` inbox
   - The email will come from `onboarding@resend.dev` (until you verify your domain)
   - The reply-to will be set to the user's email address

### Rate Limits

**Free Plan (Current):**
- 100 emails per day
- 1 email per second

**Pro Plan ($20/month):**
- 50,000 emails per month
- 10 emails per second

For a business contact form, the free plan is likely sufficient initially.

---

## Calendly Integration

### Current Setup
Calendly booking links are configured on:
- Home page: "Boka ett möte" button
- About page: "Boka ett samtal med mig" button
- Contact page: "Boka tid nu" button in the booking card

All links point to: `https://calendly.com/monika-gim-vea/30min`

### Customization
To update the Calendly link or event:
1. Go to your Calendly dashboard
2. Find the event link you want to use
3. Update the URLs in these files:
   - `src/app/page.tsx` (line 47)
   - `src/app/about/page.tsx` (line 118)
   - `src/app/contact/page.tsx` (booking section)

---

## Environment Variables

### Required Variables
All environment variables are stored in `.env.local`:

```env
# Resend API Key (REQUIRED for email)
RESEND_API_KEY=re_UA4wqwpN_4TXLGVXwA4kfsRZdExDdfgv3

# Email where contact form submissions are sent
CONTACT_EMAIL=monika@gim-vea.com

# Email address that appears as sender
# Use onboarding@resend.dev for testing
# Use your@domain.com after verifying your domain
FROM_EMAIL=onboarding@resend.dev

# Your website URL (for metadata)
NEXT_PUBLIC_SITE_URL=https://gim-vea.com
```

### Security Notes
- `.env.local` is in `.gitignore` - it won't be committed to Git
- Never commit API keys to version control
- Use `.env.example` as a template for new environments

---

## Deployment Checklist

### Before Deploying to Production:

- [ ] **Resend Domain Verified** (optional but recommended)
  - Add domain in Resend dashboard
  - Configure DNS records
  - Update `FROM_EMAIL` in `.env.local`

- [ ] **Environment Variables Set**
  - Add all `.env.local` variables to your hosting platform (Vercel/Netlify)
  - Verify `RESEND_API_KEY` is correct
  - Set `NEXT_PUBLIC_SITE_URL` to production URL

- [ ] **Test Contact Form**
  - Submit test message
  - Verify email arrives at `monika@gim-vea.com`
  - Check spam folder if not received

- [ ] **Test Calendly Links**
  - Click all booking buttons
  - Verify they open the correct Calendly event
  - Test booking a dummy appointment

- [ ] **Missing Essentials** (see audit report)
  - [ ] Add favicon.ico to public folder
  - [ ] Create robots.txt
  - [ ] Generate sitemap.xml
  - [ ] Add JSON-LD structured data
  - [ ] Configure security headers

---

## Running the Project

### Development
```bash
cd gim-vea
npm install
npm run dev
```

Open http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

### Vercel Deployment (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

---

## Troubleshooting

### Contact Form Not Sending Emails

**Check 1: API Key**
- Verify `RESEND_API_KEY` in `.env.local` matches your Resend dashboard
- Check for typos or extra spaces

**Check 2: Restart Server**
- Environment variables are loaded at startup
- After changing `.env.local`, restart dev server:
  ```bash
  # Stop server (Ctrl+C)
  npm run dev
  ```

**Check 3: Console Logs**
- Open browser console (F12)
- Submit form
- Check for error messages
- Check server terminal for logs

**Check 4: Resend Dashboard**
- Go to https://resend.com/emails
- Check if emails were sent
- Review any error messages

**Check 5: Rate Limits**
- Free plan: 100 emails/day
- Check if you've hit the limit
- View usage at https://resend.com/overview

### Calendly Links Not Working

**Check 1: Link Format**
- Ensure URL is: `https://calendly.com/monika-gim-vea/30min`
- Check for typos
- Verify event exists in Calendly dashboard

**Check 2: Event Active**
- Log into Calendly
- Check if event is active (not paused/deleted)

---

## Next Steps

### High Priority
1. **Verify Resend domain** (for professional email sender)
2. **Add favicon** to public folder
3. **Create robots.txt** for SEO
4. **Generate sitemap.xml**
5. **Test contact form** thoroughly

### Medium Priority
1. Add JSON-LD structured data
2. Configure security headers
3. Set up error tracking (Sentry)
4. Add Web Vitals monitoring

### Nice to Have
1. Add PWA manifest
2. Implement image optimizations
3. Add testing framework
4. Set up CI/CD pipeline

---

## Support & Resources

- **Resend Documentation:** https://resend.com/docs
- **Calendly Help:** https://help.calendly.com
- **Next.js Documentation:** https://nextjs.org/docs
- **Vercel Deployment:** https://vercel.com/docs

---

## Contact Information

Website: https://gim-vea.com
Email: monika@gim-vea.com
LinkedIn: https://www.linkedin.com/in/monika-bj%C3%B6rklund-12841041/
Instagram: https://www.instagram.com/gimvea/
