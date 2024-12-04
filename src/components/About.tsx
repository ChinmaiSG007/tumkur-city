const About = ({ text }: any) => {
  return (
    <div className="p-4 h-screen">
      <div className="box h-full w-full">
        <p className="text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default About;
