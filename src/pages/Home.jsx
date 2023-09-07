import React from "react";
import { Hero } from "../components/sections/Hero";
import { Mission } from "../components/sections/Mission";
import { DividingLine } from "../components/DividingLine";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Partners } from "../components/sections/Partners";
import { Contacts } from "../components/sections/Contacts";
import { Modal } from "../components/Modal";


export const Home = () => {
   const [modalActive, setModalActive] = React.useState(true)
   return (
      <>
         <Hero></Hero>
         <Mission></Mission>
         <DividingLine mainColor={"whiteContainer"}></DividingLine>
         <About></About>
         <Projects></Projects>
         <DividingLine mainColor={"greenContainer"}></DividingLine>
         <Partners></Partners>
         <Contacts></Contacts>
         <Modal active={modalActive} setActive={setModalActive}>
            <div className="content">
               <button className="modal-btn" onClick={() => setModalActive(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M30 10L10 30" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10L30 30" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
               <h2 className="modal-title">Дякуємо за ваш внесок!</h2>
              <div className="modal-check"><svg  width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.0672 125.404C50.6786 125.404 38.5683 121.727 28.2676 114.837C17.967 107.947 9.93858 98.1547 5.1977 86.6973C0.456824 75.24 -0.783602 62.6327 1.63328 50.4697C4.05016 38.3066 10.0158 27.1341 18.7758 18.3651C27.5358 9.59602 38.6967 3.62421 50.8472 1.20483C62.9976 -1.21454 75.5919 0.0271648 87.0374 4.77295C98.4829 9.51873 108.266 17.5554 115.148 27.8668C122.031 38.1781 125.705 50.3009 125.705 62.7022C125.685 79.326 119.08 95.2634 107.337 107.018C95.5946 118.773 79.6738 125.385 63.0672 125.404ZM63.0672 2.44423C51.1558 2.44423 39.5119 5.98034 29.6082 12.6053C19.7046 19.2303 11.9861 28.6465 7.42888 39.663C2.87169 50.6796 1.68055 62.8016 4.00611 74.4958C6.33167 86.1901 12.0695 96.9313 20.4938 105.361C28.9181 113.791 39.6505 119.53 51.3336 121.853C63.0168 124.177 75.1258 122.979 86.1291 118.413C97.1324 113.847 106.536 106.116 113.15 96.1998C119.764 86.2833 123.292 74.626 123.287 62.7022C123.262 46.7245 116.908 31.4088 105.619 20.1131C94.3307 8.81742 79.0284 2.46343 63.0672 2.44423Z" fill="#C3DC73"/>
<path d="M100 45.325C99.6495 45.8898 99.2524 46.4245 98.8128 46.9236L56.6269 88.9408C56.4104 89.2665 56.1163 89.5337 55.771 89.7185C55.4258 89.9033 55.0401 90 54.6482 90C54.2564 90 53.8707 89.9033 53.5254 89.7185C53.1802 89.5337 52.8861 89.2665 52.6695 88.9408C44.7548 80.8097 36.84 72.6655 28.9252 64.5081C28.6265 64.2844 28.3865 63.992 28.2257 63.6558C28.0648 63.3196 27.9879 62.9496 28.0015 62.5773C28.0151 62.2051 28.1188 61.8416 28.3038 61.518C28.4887 61.1944 28.7494 60.9202 29.0637 60.7188L34.9997 55.3704C35.2129 55.1032 35.4837 54.8874 35.792 54.7391C36.1004 54.5908 36.4383 54.5137 36.7806 54.5137C37.1229 54.5137 37.4608 54.5908 37.7692 54.7391C38.0775 54.8874 38.3483 55.1032 38.5614 55.3704L52.5904 69.6196C54.0546 71.0998 55.1429 71.1195 56.5478 69.6196L89.315 37.0755C89.5284 36.7455 89.8213 36.4742 90.167 36.2863C90.5127 36.0984 90.9001 36 91.2937 36C91.6874 36 92.0748 36.0984 92.4205 36.2863C92.7661 36.4742 93.059 36.7455 93.2724 37.0755C95.1324 38.9306 96.9924 40.7858 98.8128 42.6607C99.233 43.1518 99.6166 43.6729 99.9604 44.2198L100 45.325Z" fill="#C3DC73"/>
</svg> </div>
               <p className="modal-subtitle" >Повернутись на головну</p>
     
            </div>
            
         </Modal>
      </>
   );
};
