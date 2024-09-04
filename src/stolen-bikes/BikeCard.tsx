import imgDefault from '@/assets/imgDefault.svg'
interface IProps {
  imgSrc: string;
  title: string;
  description: string;
  dateStolen: string;
  dateStolenReport: string;
  location: string
}
const BikeCard: React.FC<IProps> = (props) => {
  return (
    <div className="bike-card  flex  shadow-md rounded-lg bg-slate-200">
      <div className="img-box w-[25%]  ">

        <img src={props.imgSrc ? props.imgSrc : imgDefault} alt={props.title}
          className="max-h-[150px] min-h-[150px] object-cover" />
      </div>
      <div className="content w-[75%] flex justify-between py-2 px-3">
        <div className="flex flex-col gap-y-4 w-[38%]">
          <h3 className=' text-bold text-xl text-blue-900'>{props.title}</h3>
          <p className='text-gray-600 text-base'>{props.description}</p>
        </div>
        <div className="flex flex-col gap-y-4 w-[58%]">
          <div className="date-stolen">
            <div className="flex items-center gap-x-1">
              <span >
                <svg fill="#162d75" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px" height="20px" viewBox="0 0 395.71 395.71"
                  xmlSpace="preserve">
                  <g>
                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                  </g>
                </svg>
              </span>
              <span className="text-lg font-semibold text-blue-900">
                Date of the theft:
              </span>
              <p>
                {props.dateStolen}
              </p>
            </div>



          </div>
          {/* <div className="date-stolen">
            <span className="mx-2 font-bold text-gray-900">
            Date of when the case was reported:
            </span>
            {props.dateStolenReport}
          </div> */}
          <div className="location">
            <div className="flex items-center gap-x-2">
              <span>
                <svg fill="rgb(134, 45, 45)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px" height="20px" viewBox="0 0 484.665 484.665"
                  xmlSpace="preserve">
                  <g>
                    <g id="_x35_5_56_">
                      <g>
                        <path d="M392.771,39.249H368.31V20.778C368.31,9.305,359.007,0,347.531,0h-7.552c-11.477,0-20.778,9.306-20.778,20.778v18.471
				H173.846V20.778C173.846,9.305,164.543,0,153.067,0h-7.552c-11.476,0-20.777,9.306-20.777,20.778v18.471H91.893
				c-30.932,0-56.096,25.165-56.096,56.097v333.222c0,30.932,25.164,56.097,56.096,56.097h300.879
				c30.932,0,56.096-25.165,56.096-56.097V95.346C448.867,64.414,423.703,39.249,392.771,39.249z M415.086,428.567
				c0,12.304-10.011,22.314-22.313,22.314H91.893c-12.304,0-22.314-10.012-22.314-22.314V95.346
				c0-12.305,10.011-22.315,22.314-22.315h32.845v26.537c0,11.474,9.302,20.779,20.777,20.779h7.552
				c11.477,0,20.779-9.306,20.779-20.779V73.03h145.355v26.537c0,11.474,9.303,20.779,20.777,20.779h7.553
				c11.477,0,20.778-9.306,20.778-20.779V73.03h24.462c12.304,0,22.313,10.011,22.313,22.315L415.086,428.567L415.086,428.567z"/>
                        <path d="M356.665,166.197h-222c-9.328,0-16.891,7.562-16.891,16.891s7.563,16.891,16.891,16.891h222
				c9.328,0,16.891-7.563,16.891-16.891S365.993,166.197,356.665,166.197z"/>
                        <path d="M355.476,233.197h-222c-9.328,0-16.891,7.562-16.891,16.891s7.563,16.891,16.891,16.891h222
				c9.328,0,16.892-7.562,16.892-16.891S364.804,233.197,355.476,233.197z"/>
                        <path d="M354.286,300.197h-222c-9.328,0-16.891,7.562-16.891,16.891s7.563,16.891,16.891,16.891h222
				c9.328,0,16.891-7.562,16.891-16.891S363.614,300.197,354.286,300.197z"/>
                        <path d="M353.097,367.197h-222c-9.328,0-16.891,7.562-16.891,16.891s7.563,16.891,16.891,16.891h222
				c9.328,0,16.892-7.562,16.892-16.891S362.425,367.197,353.097,367.197z"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="text-lg font-semibold text-red-900">
                Location:
              </span>
              <p>
                {props.location}
              </p>
            </div>


          </div>
        </div>


      </div>

    </div>)
}

export default BikeCard