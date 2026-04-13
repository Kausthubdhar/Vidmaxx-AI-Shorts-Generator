import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                <div className="h-2 w-2 rounded-sm bg-background" />
              </div>
              <span className="font-bold text-xl tracking-tight">VidMaxx</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              The complete AI operating system for your short-form video strategy on YouTube and Instagram.
            </p>
            <div className="flex gap-4 text-muted-foreground">
               <Link href="#" className="hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
               </Link>
               <Link href="#" className="hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2.5 7.1C2.5 7.1 2.4 5.3 3.3 4.4C4.4 3.2 5.7 3.2 6.3 3.1C10.1 2.8 12 2.8 12 2.8C12 2.8 13.9 2.8 17.7 3.1C18.3 3.2 19.6 3.2 20.7 4.4C21.6 5.3 21.5 7.1 21.5 7.1C21.5 7.1 21.8 8.8 21.8 10.5V13.5C21.8 15.2 21.5 16.9 21.5 16.9C21.5 16.9 21.6 18.7 20.7 19.6C19.6 20.8 18.1 20.7 17.4 20.9C14 21.2 12 21.2 12 21.2C12 21.2 10.1 21.2 6.3 20.9C5.7 20.8 4.4 20.8 3.3 19.6C2.4 18.7 2.5 16.9 2.5 16.9C2.5 16.9 2.2 15.2 2.2 13.5V10.5C2.2 8.8 2.5 7.1 2.5 7.1Z" /><path d="M9.8 15.5L15.9 12L9.8 8.5V15.5Z" /></svg>
               </Link>
               <Link href="#" className="hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
             © {new Date().getFullYear()} VidMaxx Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
