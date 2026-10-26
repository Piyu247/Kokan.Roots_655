/**
 * Safe scroll lock utility for mobile & desktop viewports.
 * Prevents background scroll jump when modals, drawers, or sheets open and close.
 */

let lockCount = 0;
let preservedScrollY = 0;

export const lockBodyScroll = () => {
  if (lockCount === 0) {
    preservedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    
    // Lock position firmly without visual shift
    document.body.style.position = 'fixed';
    document.body.style.top = `-${preservedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
  lockCount++;
};

export const unlockBodyScroll = () => {
  if (lockCount <= 0) return;
  lockCount--;
  
  if (lockCount === 0) {
    const scrollY = preservedScrollY;
    
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    
    // Restore precise scroll position immediately without smooth-scroll animation delay
    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }
};
