const GradientSpheres = ({ sphere1Class, sphere2Class }) => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={sphere1Class} />
      <div className={sphere2Class} />
    </div>
  );
};

export default GradientSpheres;
