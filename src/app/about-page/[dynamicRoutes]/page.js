
const DynamicPage = ({params, searchParams}) => {

    console.log(params,searchParams);

    return (
        <div>
            <h1>Id name : {params.dynamicRoutes}</h1>
            <h2 className="text-center text-lg   text-red-600">This is dynamic page ex: http://localhost:3000/about-page/2, http://localhost:3000/about-page/DynamicPage aer name </h2>
        </div>
    );
};

export default DynamicPage;
 