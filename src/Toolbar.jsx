export default function Toolbar({ filters, selected, onSelectFilter }) {
  const filterList = filters.map(filter => {
    const className = `toolbar__button${selected === filter ? " toolbar__button_selected" : ""}`;
    return (
      <div className={className} onClick={onSelectFilter}>{filter}</div>
    );
  });
  return (
    <div className="toolbar">
      {filterList}
    </div>
  );
}