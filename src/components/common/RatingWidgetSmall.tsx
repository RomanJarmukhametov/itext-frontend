'use client';
import { useEffect } from 'react';

export default function RatingWidgetSmall() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      ((r,p)=>{
        const l=document.getElementById(r);
        l.contentWindow.document.open();
        l.contentWindow.document.write(decodeURIComponent(escape(atob(p))));
        l.contentWindow.document.close();
      })(
        "small_light_70000001024919567", 
        "PGhlYWQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgd2luZG93Ll9fc2l6ZV9fPSdzbWFsbCc7CiAgICB3aW5kb3cuX190aGVtZV9fPSdsaWdodCc7CiAgICB3aW5kb3cuX19icmFuY2hJZF9fPSc3MDAwMDAwMTAyNDkxOTU2NycKICAgIHdpbmRvdy5fX29yZ0lkX189JycKICAgPC9zY3JpcHQ+PHNjcmlwdCBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiB0eXBlPSJtb2R1bGUiIHNyYz0iaHR0cHM6Ly9kaXNrLjJnaXMuY29tL3dpZGdldC1jb25zdHJ1Y3Rvci9hc3NldHMvaWZyYW1lLmpzIj48L3NjcmlwdD48bGluayByZWw9Im1vZHVsZXByZWxvYWQiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGhyZWY9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2RlZmF1bHRzLmpzIj48bGluayByZWw9InN0eWxlc2hlZXQiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGhyZWY9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2RlZmF1bHRzLmNzcyI+PC9oZWFkPjxib2R5PjxkaXYgaWQ9ImlmcmFtZSI+PC9kaXY+PC9ib2R5Pg=="
      );
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on component unmount
    };
  }, []);

  return (
    <iframe
      id="small_light_70000001024919567"
      width="114px"
      height="28px"
      sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
      className="glowEffect" // Applying the glow effect class
      title="2gis.kz Rating"
      style={{
        border: '2px solid transparent',
        borderRadius: '4px',
        cursor: 'pointer', // Indicates clickability
      }}
    ></iframe>
  );
}
