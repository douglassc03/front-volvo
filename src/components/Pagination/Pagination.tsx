// import { useState, useRef } from 'react';
// import style from './Pagination.module.css';
// import { useCars } from '../../hooks/useCars';

// export default function Pagination() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const carouselRef = useRef<HTMLDivElement>(null);
//     let cars = useCars();
//     const totalSlides = cars.cars.length;  

//     function moveCarousel() {
//         if (currentSlide < totalSlides - 1) {
//             setCurrentSlide(currentSlide + 1);
//         } else {
//             setCurrentSlide(0);
//         }
//     };

//     return (
//         <div className={style.paginationWrapper}>
//             {Array(totalSlides).fill(0).map((_, index) => (
//                 <button type='button' key={index} className={style.threeDots} onClick={() => setCurrentSlide(index)}></button>
//             ))}
//         </div>
//     )
// }