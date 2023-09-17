import  { useEffect } from "react";
import { createPortal } from "react-dom";
import scss from '../../styles/index.module.scss';
import SvgSprite from '../../images/sprite.svg';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {

   useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
         onClose();
         document.body.style.overflow = 'visible'; 
      };
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => window.removeEventListener('keydown', handleKeyDown);

   }, [onClose]);
 
   const handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
         onClose();
         document.body.style.overflow = 'visible'; 
      };
   };

   document.body.style.overflow = 'hidden';  

   return (
      createPortal(<div className={scss.overlay} onClick={handleBackdropClick}>
            <div className={scss.modal}>
               <div className={scss.closebtn} onClick={onClose}>
                  <svg className={scss.icon} width="18" height="18">
                     <use className='icon' href={SvgSprite + '#icon-close'}></use>
                  </svg>
               </div>
                  {children}
            </div>
      </div>, modalRoot)  
   )
};