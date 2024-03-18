const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600"><a href="https://forbes.kz/process/education/kazahstanskie_shkolniki_vyiigrali_turnir_po_programmirovaniyu_codeday_v_nyu-yorke/"> О нас в Forbes</a></h2>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20"> Читайте статью в форбс о наших учащихся, которые выйграли престижный хакатон в городе Нью-Йорк. </p>
        <a style={{
          backgroundColor: '#04AA6D', /* Green */
          border: 'none',
          color: 'white',
          padding: '5px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          fontSize: '16px',
        }} href="https://forbes.kz/process/education/kazahstanskie_shkolniki_vyiigrali_turnir_po_programmirovaniyu_codeday_v_nyu-yorke/"> Перейти к статье</a>
      </div>
      {/* End .col */}
  
      <div className="col-lg-6">
        <img
          src="/img/pages/about/3.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};
  
export default Block1;
  
