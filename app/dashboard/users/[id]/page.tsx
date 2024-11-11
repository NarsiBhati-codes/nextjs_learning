const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>User Detail page {id}</div>;
};

export default page;
