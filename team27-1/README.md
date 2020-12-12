# Bridger
Our project focuses on bridging the gap between administration and students. It aims at bringing everyone at the same platform for smooth functioning and effective communication. It is an interactive and easy to use website with different user roles. It has a complaint resolving mechanism with central announcement system.

<h3><a href="http://bridger.shreyansh_mishr.repl.co/" target"_blank">Live Preview</a></h3>

<h1>Features</h1>

<ul>
  <li>An interactive and easy workflow to create and manage complaints.
  <li>Different Levels of Users, can be classified into Student, Student Admin, and Super Admin
  <li>Super Admin can be classified into 5 more parts.
  <li>Central Announcement System to broadcast any information to all the users.
  <li>Integrated Chatrooms for each complaint to ease communication.
  <li>Can be customized exclusively for the institute.
</ul>

<h1>Setup</h1>

<h3>Requirements</h3>
<ul>
  <li>NodeJS (v12+)
  <li>Git
</ul>

<h3>Installation</h3>

```bash
git clone https://github.com/vikiwarrior/hackiiitv20-submissions.git
cd hackiiitv20-submissions/
git checkout team27
cd team27-1/
npm install
```

<h3>Environment Variables(.env)</h3>

```env
db=mongodb_url
cryptosecret=your-crypto-secret-string
JWT_KEY=your-jwt-secret-string
hosturl=link-where-the-app-is-hosted-without-/-at-the-end
email=email-address-for-email-verification
password=password-for-email-address
```

<h3>Running</h3>

```bash
node server.js
```

To preview the app, visit ``http://localhost:3000/``
