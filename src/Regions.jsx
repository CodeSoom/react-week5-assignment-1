const Regions = ({ regions, onClickRegion }) => (
  <div>
    <span>지역 선택 : </span>
    { regions.map((region) => (
      <button
        type="button"
        key={`button-region-${region.id}`}
        onClick={() => onClickRegion(region)}
      >
        { region.name }
      </button>
    )) }
  </div>
);
export default Regions;
