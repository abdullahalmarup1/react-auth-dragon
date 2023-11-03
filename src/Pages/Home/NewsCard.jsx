import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark, HiOutlineShare, HiMiniEye } from "react-icons/hi2";



const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        details,
        author,
        rating,
        total_view,
        _id, } = news

    return (

        <div className="card bg-base-100 shadow-xl mb-16">


            <div className=' bg-gray-100 bg-opacity-70 w-full border mb-6 rounded-t-lg'>

                <div className='flex justify-between'>
                    <div className='flex p-4'>
                        <img className='rounded-full w-10  mr-4' src={author.img} alt="" />

                        <div>
                            <p>{author.name}</p>
                            <h2 className='text-sm font-light'>
                                {author.published_date}
                            </h2>
                        </div>
                    </div>
                    <div
                        className='flex gap-2 mt-5 mr-4 font-thin'>
                        <HiOutlineBookmark className='text-3xl font-light'>
                        </HiOutlineBookmark>
                        <HiOutlineShare className='text-3xl font-light'>
                        </HiOutlineShare>
                    </div>
                </div>

            </div>

            <h2 className="card-title text-2xl mb-3"> {title} </h2>
            <figure>
                <img className='w-full' src={image_url} alt="img" />
            </figure>
            <div className="card-body">

                {
                    details.length > 200 ?
                        <p>
                            {details.slice(0, 200)}

                            <Link
                                to={`/news/${_id}`}
                                className='font-bold text-yellow-400'>
                                Read more...</Link>
                        </p>
                        :
                        <p>
                            {details}
                        </p>
                }
            </div>

            <span className='mb-5 px-8'> <hr /> </span>

            {/* five stars marks */}



            <div className='flex justify-between'>

                <div className='flex gap-2 mb-8 mt-4 ml-6'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.788 1.21006C9.236 0.133063 10.764 0.133063 11.212 1.21006L13.294 6.21706L18.698 6.65006C19.862 6.74306 20.334 8.19506 19.447 8.95506L15.33 12.4821L16.587 17.7551C16.858 18.8911 15.623 19.7881 14.627 19.1801L10 16.3541L5.373 19.1801C4.377 19.7881 3.142 18.8901 3.413 17.7551L4.67 12.4821L0.553003 8.95506C-0.333998 8.19506 0.138003 6.74306 1.302 6.65006L6.706 6.21706L8.788 1.21106V1.21006Z" fill="#FF8C47" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.788 1.21006C9.236 0.133063 10.764 0.133063 11.212 1.21006L13.294 6.21706L18.698 6.65006C19.862 6.74306 20.334 8.19506 19.447 8.95506L15.33 12.4821L16.587 17.7551C16.858 18.8911 15.623 19.7881 14.627 19.1801L10 16.3541L5.373 19.1801C4.377 19.7881 3.142 18.8901 3.413 17.7551L4.67 12.4821L0.553003 8.95506C-0.333998 8.19506 0.138003 6.74306 1.302 6.65006L6.706 6.21706L8.788 1.21106V1.21006Z" fill="#FF8C47" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.788 1.21006C9.236 0.133063 10.764 0.133063 11.212 1.21006L13.294 6.21706L18.698 6.65006C19.862 6.74306 20.334 8.19506 19.447 8.95506L15.33 12.4821L16.587 17.7551C16.858 18.8911 15.623 19.7881 14.627 19.1801L10 16.3541L5.373 19.1801C4.377 19.7881 3.142 18.8901 3.413 17.7551L4.67 12.4821L0.553003 8.95506C-0.333998 8.19506 0.138003 6.74306 1.302 6.65006L6.706 6.21706L8.788 1.21106V1.21006Z" fill="#FF8C47" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.788 1.21006C9.236 0.133063 10.764 0.133063 11.212 1.21006L13.294 6.21706L18.698 6.65006C19.862 6.74306 20.334 8.19506 19.447 8.95506L15.33 12.4821L16.587 17.7551C16.858 18.8911 15.623 19.7881 14.627 19.1801L10 16.3541L5.373 19.1801C4.377 19.7881 3.142 18.8901 3.413 17.7551L4.67 12.4821L0.553003 8.95506C-0.333998 8.19506 0.138003 6.74306 1.302 6.65006L6.706 6.21706L8.788 1.21106V1.21006Z" fill="#FF8C47" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.788 1.21006C9.236 0.133063 10.764 0.133063 11.212 1.21006L13.294 6.21706L18.698 6.65006C19.862 6.74306 20.334 8.19506 19.447 8.95506L15.33 12.4821L16.587 17.7551C16.858 18.8911 15.623 19.7881 14.627 19.1801L10 16.3541L5.373 19.1801C4.377 19.7881 3.142 18.8901 3.413 17.7551L4.67 12.4821L0.553003 8.95506C-0.333998 8.19506 0.138003 6.74306 1.302 6.65006L6.706 6.21706L8.788 1.21106V1.21006Z" fill="#FF8C47" />
                    </svg>

                    <p className='font-light'>
                        {rating.number}
                    </p>

                </div>

                <div className='flex gap-4 mr-5 text-center items-center mb-10 mt-3'>
                    <HiMiniEye className='text-3xl'>
                    </HiMiniEye>
                    <h2 className='font-light'>
                        {total_view}
                    </h2>

                </div>

            </div>

        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object,

}
