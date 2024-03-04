import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './CardData';

const ProductPage = () => {
let {id} = useParams()
let res = data.filter((val) => val.id == id);
console.log(res,data,"res");
  return (
    <div>
      {
       res.map((val,ind)=>{
        return <div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {val.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {val.desc}
            </p>
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
          </div>
        </div>;
       })
      }
    </div>
  );
}

export default ProductPage;
