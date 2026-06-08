import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    // جعلنا الكارت يأخذ العرض الكامل المتاح w-full مع حد أقصى max-w-[360px] وارتفاع ثابت حقيقي h-[480px]
    <div className="bg-secondary p-4 my-4 transition-all duration-300 hover:shadow-xl rounded-lg flex flex-col justify-between h-[480px] w-full max-w-[350px] mx-auto">
      
      {/* الجزء العلوي: يحتوي على الصورة والبيانات، وبينهما مسافات تلقائية بفضل gap-3 */}
      <div className="flex flex-col gap-3">
        
        {/* حاوية الصورة: أعطيناها خلفية بيضاء وارتفاعاً ثابتاً لتبدو الصور متناسقة دائماً */}
        <div className="rounded-lg bg-white p-2 h-60 flex items-center justify-center overflow-hidden">
          <img
            src={props.image}
            loading="lazy"
            className="max-h-full  max-w-full object-contain hover:scale-105 transition-all duration-300"
            alt={props.name}
          />
        </div>
        
        {/* تفاصيل المنتج */}
        <div className="px-1 mt-1">
          {/* حاوية الاسم والنجوم: ارتفاع ثابت h-12 متباعد ومريح للعين */}
          <div className="flex justify-between items-start h-12 mb-2">
            <p className="font-semibold text-sm text-white line-clamp-2 flex-1 pr-2 leading-tight">
              {props.name}
            </p>
            <p className="shrink-0 text-xs mt-0.5">⭐⭐⭐⭐⭐</p>
          </div>
          
          {/* الأسعار متباعدة بشكل ممتاز */}
          <div className="text-xl flex gap-3 items-center mt-2">
            <div className="font-bold text-primary">${props.new_price}</div>
            <div className="font-medium text-gray-400 line-through text-sm">
              ${props.old_price}
            </div>
          </div>
        </div>

      </div>

      {/* قسم الزر في الأسفل تماماً ومفصول بمسافة */}
      <div className="mt-auto pt-2">
        <Link to={`/product/${props.id}`}>
          <button className="border w-full py-2.5 active:scale-98 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 font-bold rounded-lg bg-primary text-white outline-none text-sm">
            Shop Now
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Item;