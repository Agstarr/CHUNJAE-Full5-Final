import React from "react";

const PdfComp = ({ data }) => {

    let passageHtml="";

    data.map(item=>{
        passageHtml += item.passageHtml;
    })

    return <>
        {
            React.createElement('div'
                , { dangerouslySetInnerHTML: { __html: passageHtml } })
        }
    </>
};

export default PdfComp;


