import React, {useEffect, useRef, useState} from "react";
import './pdf.css'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PdfComp2 = ({ data }) => {

    let passageHtml="";

    data.map(item=>{
        passageHtml += item.passageHtml;
    })

    let passagestyle = {
         height: '45%'
        , wordBreak: 'break-all'
        , padding: '10px'
    }


    return <div className='pdf-content'>

        {
            data.map(item=>{
                return <section>
                    {
                        React.createElement('div'
                            , {
                                dangerouslySetInnerHTML:
                                    {__html: item.passageHtml}
                            })
                    }
                    {
                        React.createElement('div'
                            , {
                                dangerouslySetInnerHTML:
                                    {__html: item.questionHtml}
                            })
                    }
                    {
                        React.createElement('div'
                            , {
                                dangerouslySetInnerHTML:
                                    {__html: item.choice1Html+item.choice2Html
                                            +item.choice3Html+item.choice4Html
                                            +item.choice5Html
                                    }
                            })
                    }
                </section>
            })
        }
    </div>
};

export default PdfComp2;


