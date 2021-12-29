export default function Regions({ regions }) {
  if (regions.length === 0) {
    return (
      <div>
        지역 정보를 가져오세요.
      </div>
    );
  }

  return (
    <ul />
  );
}
