AllamTechno Delivery — Firebase READY with Splash
=================================================
1) Firebase → Authentication → Enable Email/Password
2) Firebase → Firestore → Create database (Test mode for now) → Rules: paste firebase.rules.txt → Publish
3) Create user (Authentication → Add user):
   Email: AhmedAllm@app.com
   Password: 50602884
   Copy UID.
4) Firestore → Collection: users → Doc ID = UID → Fields:
   username: AhmedAllm
   email: AhmedAllm@app.com
   role: owner
5) Open index.html (splash) → it redirects to login.html → Sign in with:
   Username: AhmedAllm
   Password: 50602884
6) After sign-in you land on dashboard.html

Deploy on GitHub Pages:
- Upload all files to a repo
- Settings → Pages → Deploy from branch (main / root)
- Visit the URL (splash shows first).