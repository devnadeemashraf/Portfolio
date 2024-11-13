const withIconStyles = (props, component) => {
  const { size = 16 } = props;
  const RenderComponent = component;
  return () => <RenderComponent size={size} className="lucide-icon" />;
};

export default withIconStyles;
