import { IBike, IFilter } from "@/models/bikes.model";
import { useGetStolenBikesQuery } from "@/services/bikesApi";
import { useState } from "react";
import BikeCard from "./BikeCard";
 import BikePagination from "./BikePagination";
import Loader from "./Loader";
import SearchTitle from "./SearchTitle";
// import DateRangeSearch from "./DateRangeSearch";


const StolenBikes: React.FC = () => {

    const [filter, setFilter] = useState<IFilter>({
        page: 1,
        per_page: 10,
        title: ''
    })
    const { bikes, isLoading, isFetching } = useGetStolenBikesQuery<{ bikes: IBike[], isLoading: boolean, isFetching: boolean }>
        ({ ...filter }, {
            selectFromResult: ({ data, isLoading, isFetching }) => ({
                bikes: data?.bikes,
                isLoading: isLoading,
                isFetching: isFetching
            }),
        });
 
    return (
        <>

            <div className="head text-center my-4">
                <h2 className="text-3xl font-bold text-blue-950">Bike Stolen Apps</h2>
            </div>
            <div className="search-box my-2 gap-x-6 flex items-center justify-between md:px-12 px-2">
                <div className="md:w-[40%] w-full">
                    <SearchTitle setTitle={(title: string) => setFilter(prevState => {
                        return { ...prevState, title: title }
                    })} />
                </div>
                {/* <div className="w-[60%]">
               < DateRangeSearch/> 
                </div> */}

            </div>
            {(isLoading || isFetching) ?
                <Loader />
                : bikes?.length !== 0 ? (
                    <div className="flex flex-col items-center gap-y-4 w-full">
                        <div className="bike-page flex flex-col gap-y-3 w-full">
                            {bikes?.map(b => <BikeCard
                                key={`key-${b.id}`}
                                imgSrc={b.thumb}
                                title={b.title}
                                description={b.description}
                                dateStolen={b.date_stolen}
                                dateStolenReport={`${b.stolen_coordinates}`}
                                location={b.stolen_location} />)}
                        </div>
                         {filter?.title !== '' ? <></> :
                            <BikePagination
                                pageSize={filter.per_page} currentPage={filter.page}
                                setPage={(page: number) => setFilter(prevState => {
                                    return { ...prevState, page: page };
                                })} />
                        } 

                    </div>) : (
                    <div className="empty text-center ">
                        <h4 className="text-2xl font-bold text-gray-600">
                           no Data
                        </h4>
                    </div>
                )

            }


        </>
    )
}

export default StolenBikes