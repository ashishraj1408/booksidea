import PropTypes from 'prop-types';
function Cards({item}) {
  return (
    <>
    <div className='mt-4'>
        <div className="card w-96 bg-base-100 shadow-xl border border-1">
                <figure>
                    <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body p-2.5">
                    <h2 className="card-title flex py-2.5 px-1.5">
                    {item.name}
                    <div className="badge badge-secondary border border-gray-300 rounded-lg ml-2.5 px-2.5">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-between">
                    <div className="badge badge-outline shadow-xl rounded-xl border border-1 py-0 m-0 px-1.5">${item.price}</div> 
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200 shadow-xl border border-1">Buy Now</div>
                    </div>
                </div>
        </div>
    </div>
        
    </>
  )
}
Cards.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        // Add more PropTypes validations as needed for other properties
      }).isRequired,
};
export default Cards