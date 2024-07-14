const PdfTest = ({ data }) => {


    const dataToHtml = React.createElement('div'
        , { dangerouslySetInnerHTML: { __html: data[1].passageHtml } })


    return <>
        {
            dataToHtml
        }
    </>
};

export default PdfTest;


