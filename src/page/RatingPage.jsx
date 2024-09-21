import RatingComponent from "../Components/RatingComponent";

const RatingPage = () => {
  const navigateLink = "/dashboard";
  return (
    <>
      <RatingComponent navigateLink={navigateLink} />
    </>
  );
};

export default RatingPage;
