import React, { useRef } from 'react';
import { CodeBlock, dracula, nord } from 'react-code-blocks';
import { return1 } from './ReturnTxt';
import Header from './Header';
function Documentation() {
    const shuffleRef = useRef(null);
    const newBoxRef = useRef(null);
    const drawRef = useRef(null);
    const shuffleNewRef = useRef(null);

    const shuffleSet = () => {
        shuffleRef.current?.scrollIntoView({ behavior: 'smooth' });

    };
    const newBox = () => {
        newBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const drawDomino = () => {
        drawRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const shuffleNew = () => {
        shuffleNewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Header shuffleSet={shuffleSet} newBox={newBox} drawDomino={drawDomino} shuffleNew={shuffleNew} />
            <div ref={newBoxRef} className='flex flex-col w-[100%] relative mt-20'>
                <div className='flex flex-col justify-center '>
                    <h1 className='text-slate-100 font-semibold font-sans mb-2 text-lg sm:text-xl lg:text-2xl ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>Get a fresh <em>NEW BOX</em> of Dominos:</h1>

                    <div className=' border-t border-b border-slate-400 py-2 flex flex-col justify-center items-center overflow-x-auto no-scrollbar '>
                        <h1 className='text-slate-100 font-semibold font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-green-900 flex flex-col justify-center items-center px-4 mr-4'>GET</div>
                            http://localhost:8080/v1/dominos/newbox
                        </h1>
                    </div>

                    <ul className='list-disc px-4 mt-4'>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14   xl:ml-32 2xl:ml-48'>
                            A new box of dominos comes with all dominos in the same order everytime, just like getting a newly printed box of dominos right off the factory line!
                        </li>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14  xl:ml-32 2xl:ml-48'>
                            Make a simple HTTP GET Request to the above url and it will return a JSON object titled "newBox".
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14  xl:ml-32 2xl:ml-48'>
                            Opening a new box, will return to you a new domino set!  Your set of dominos and the "setId" will be used for further calls to the API.
                        </li>
                    </ul>


                    <div className='  flex flex-col justify-center items-center my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md  mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:w-[80%]'>
                            <CodeBlock
                                text={`
                            {
                                "message": "New Box of dominos with SetId: 65e29b46cf56bb408d4c1e2c",
                                "newBox": {
                                    "_id": "65e29b46cf56bb408d4c1e2c",
                                    "remaining": 28,
                                    "shuffled": false,
                                    "dominos": [
                                        {
                                            "index": 27,
                                            "sideA": 6,
                                            "sideB": 6,
                                            "isDouble": true,
                                            "edgeL": 12,
                                            "edgeR": 12,
                                            "isHorizontal": false,
                                            "openSideA": false,
                                            "openSideB": false,
                                            "openEdgeA": true,
                                            "openEdgeB": true,
                                            "totalValue": 12,
                                            "isFaceUp": true,
                                            "next": null,
                                            "image": "http://localhost:8080/images/dom6.6.png"
                                        },
                                        {
                                            "index": 26,
                                            "sideA": 5,
                                            "sideB": 6,
                                            "isDouble": false,
                                            "edgeL": null,
                                            "edgeR": null,
                                            "isHorizontal": false,
                                            "openSideA": true,
                                            "openSideB": true,
                                            "openEdgeA": false,
                                            "openEdgeB": false,
                                            "totalValue": 11,
                                            "isFaceUp": true,
                                            "next": null,
                                            "image": "http://localhost:8080/images/dom5.6.png"
                                        },
                                        ...
                                        ...
                                        ...
                                        ...
                                        `}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />

                        </div>
                    </div>
                </div>

                <div ref={shuffleNewRef} className='flex flex-col justify-center '>
                    <h1 className='text-slate-100 font-semibold font-sans mt-20 mb-2 text-lg sm:text-xl lg:text-2xl ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>Get a <em>NEW SHUFFLED SET</em> of Dominos:</h1>

                    <div className=' border-t border-b border-slate-400 py-2 flex flex-col justify-center items-center overflow-x-auto no-scrollbar '>
                        <h1 className='text-slate-100 font-semibold font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-green-900 flex flex-col justify-center items-center px-4 mr-4 text-slate-100'>GET</div>
                            http://localhost:8080/v1/dominos/newset
                        </h1>
                    </div>

                    <ul className='list-disc px-4 mt-4'>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            Make a simple HTTP GET Request to the above url and it will return a JSON object titled "newSet".
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            Returns a shuffled set of dominos with a new "setId" that will be used for further calls to the API.
                        </li>
                    </ul>


                    <div className='  flex flex-col justify-center items-center my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:w-[80%]'>
                            <CodeBlock
                                text={`
                            {
                                "message": "New Set of shuffled dominos with SetId: 65e2b367cf56bb408d4c1e2f",
                                "newSet": {
                                    "_id": "65e2b367cf56bb408d4c1e2f",
                                    "remaining": 28,
                                    "shuffled": true,
                                    "dominos": [
                                        {
                                            "index": 2,
                                            "sideA": 0,
                                            "sideB": 2,
                                            "isDouble": false,
                                            "edgeL": null,
                                            "edgeR": null,
                                            "isHorizontal": false,
                                            "openSideA": true,
                                            "openSideB": true,
                                            "openEdgeA": false,
                                            "openEdgeB": false,
                                            "totalValue": 2,
                                            "isFaceUp": false,
                                            "next": null,
                                            "image": "http://localhost:8080/images/dom0.2.png"
                                        },
                                        {
                                            "index": 17,
                                            "sideA": 2,
                                            "sideB": 6,
                                            "isDouble": false,
                                            "edgeL": null,
                                            "edgeR": null,
                                            "isHorizontal": false,
                                            "openSideA": true,
                                            "openSideB": true,
                                            "openEdgeA": false,
                                            "openEdgeB": false,
                                            "totalValue": 8,
                                            "isFaceUp": false,
                                            "next": null,
                                            "image": "http://localhost:8080/images/dom2.6.png"
                                        },
                                        ...
                                        ...
                                        ...
                                        ...
                                        `}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />

                        </div>
                    </div>
                </div>


                <div ref={shuffleRef} className='flex flex-col justify-center '>
                    <h1 className='text-slate-100 font-semibold font-sans mt-20 mb-2 text-lg sm:text-xl lg:text-2xl ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>Shuffle an <em>EXISTING SET</em> of Dominos:</h1>

                    <div className=' border-t border-b border-slate-400 py-2 flex flex-col justify-center items-center overflow-x-auto no-scrollbar '>
                        <h1 className='text-slate-100 font-semibold font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-yellow-600 flex flex-col justify-center items-center px-4 mr-4'>POST</div>
                            http://localhost:8080/v1/dominos/shuffleSet/{`*** SET ID ***`}
                        </h1>
                    </div>

                    <ul className='list-disc px-4 mt-4'>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            Use your domino set id to shuffle and play with your dominos!
                        </li>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            Make a simple HTTP POST Request to the above url, and pass your domino set id into the url parameter.
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            Returns a shuffled set of dominos as a JSON object titled "newSet".
                        </li>
                    </ul>


                    <div className='  flex flex-col justify-center items-center my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:w-[80%]'>
                            <CodeBlock
                                text={`
                            {
                                "message": "Shuffling Dominos in Set: 65e2b367cf56bb408d4c1e2f",
                                "newSet": {
                                    "_id": "65e2b367cf56bb408d4c1e2f",
                                    "remaining": 28,
                                    "shuffled": true,
                                    "dominos": [...],
                                }
                            }
                            `}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />

                        </div>
                    </div>
                </div>




                <div ref={drawRef} className='flex flex-col justify-center '>
                    <h1 className='text-slate-100 font-semibold font-sans mt-20 mb-2 text-lg sm:text-xl lg:text-2xl ml-4 md:ml-14 xl:ml-32 2xl:ml-48'> <em>DRAW ONE</em> or more Dominos:</h1>

                    <div className=' border-t border-b border-slate-400 py-2 flex flex-col justify-center items-center overflow-x-auto no-scrollbar '>
                        <h1 className='text-slate-100 font-semibold font-sans text-md sm:text-lg lg:text-xl flex px-4 justify-around'>
                            <div className=' bg-yellow-600 flex flex-col justify-center items-center px-4 mr-4 text-slate-100'>POST</div>
                            http://localhost:8080/v1/dominos/draw/***SET ID***/***COUNT***
                        </h1>
                    </div>

                    <ul className='list-disc px-4 mt-4'>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            Make a simple HTTP POST Request to the above url and pass your domino set id into the url parameters.
                        </li>
                        <li className='text-slate-100 font-normal  font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            By default, it will draw one domino from your set of dominos and return it as a JSON object.
                        </li>
                        <li className='text-slate-100 font-normal font-sans text-sm lg:text-lg my-1 ml-4 md:ml-14 xl:ml-32 2xl:ml-48'>
                            To draw more than one domino at a time, add the optional "COUNT" parameter and the dominos will be returned in an array.
                        </li>
                    </ul>


                    <div className='  flex flex-col justify-center items-center my-4'>
                        <h1 className='text-slate-100 font-semibold font-sans text-md  mb-2'><em>Returns:</em></h1>
                        <div className=' flex flex-col justify-center h-64 border-black w-[100%] md:w-[90%] xl:w-[80%]'>
                            <CodeBlock
                                text={`
                            {
                                "message": "You picked up a domino!",
                                "dominos": [
                                    {
                                        "index": 22,
                                        "sideA": 4,
                                        "sideB": 4,
                                        "isDouble": true,
                                        "edgeL": 8,
                                        "edgeR": 8,
                                        "isHorizontal": false,
                                        "openSideA": false,
                                        "openSideB": false,
                                        "openEdgeA": true,
                                        "openEdgeB": true,
                                        "totalValue": 8,
                                        "isFaceUp": false,
                                        "next": null,
                                        "image": "http://localhost:8080/images/dom4.4.png"
                                    }
                                ],
                                "remaining": 25,
                                "response": { ** The remaining dominos are returned also ** }
                            }
                            `}
                                theme={dracula}
                                language="javascript"
                                showLineNumbers={true}
                            />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Documentation

{/* <CodeBlock
                            text={`
                            {
                                "message": "New Set of shuffled dominos with SetId: 65e2a0dacf56bb408d4c1e2d",
                                "newSet": {
                                    "_id": "65e2a0dacf56bb408d4c1e2d",
                                    "remaining": 28,
                                    "shuffled": true,
                                    "dominos": [
                                        {
                                            "index": 15,
                                            "sideA": 2,
                                            "sideB": 4,
                                            "isDouble": false,
                                            "edgeL": null,
                                            "edgeR": null,
                                            "isHorizontal": false,
                                            "openSideA": true,
                                        "openSideB": true,
                                        "openEdgeA": false,
                                        "openEdgeB": false,
                                        "totalValue": 6,
                                        "isFaceUp": false,
                                        "next": null,
                                        "image": "http://localhost:8080/images/dom2.4.png"
                                    },
                                    {
                                        "index": 20,
                                        "sideA": 3,
                                        "sideB": 5,
                                        "isDouble": false,
                                        "edgeL": null,
                                        "edgeR": null,
                                        "isHorizontal": false,
                                        "openSideA": true,
                                        "openSideB": true,
                                        "openEdgeA": false,
                                        "openEdgeB": false,
                                        "totalValue": 8,
                                        "isFaceUp": false,
                                        "next": null,
                                        "image": "http://localhost:8080/images/dom3.5.png"
                                    },
                                    ...
                                    ...
                                    ...
                                    `}
                                    theme={dracula}
                                    language="javascript"
                                    showLineNumbers={true}
                                /> */}