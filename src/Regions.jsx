const buttonStyle = { width: '60px', margin: '0 5px' };

const Regions = ({ region, regions, onClickRegion }) => (
  <div>
    <span>지역 선택 : </span>
    { regions?.map((regionItem) => (
      <button
        type="button"
        key={`button-region-${regionItem.id}`}
        onClick={() => onClickRegion(regionItem)}
        style={buttonStyle}
      >
        { regionItem.name }
        { !!region && regionItem.id === region.id && '(V)' }
      </button>
    )) }
  </div>
);
export default Regions;
