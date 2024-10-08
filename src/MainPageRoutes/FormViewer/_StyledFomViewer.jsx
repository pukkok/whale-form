import styled from "styled-components";

const FormViewerWrapper = styled.section`

    main{
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 10vh;
    }

    h1{
        font-size: 26px;
        width: 500px;
        margin: 40vh auto;
    }

    .btns{
        display: flex;
        button{
            display: flex;
            align-items: center;
            padding: 6px 8px;
            border-radius: 8px;
            gap: 10px
        }
    
        button.prev{
            background-color: var(--pk-standard-btn-bg);
            color: var(--pk-light-grey);
            margin-right: 12px;
        }
        button.next{
            background-color: var(--pk-point);
            color: var(--pk-light-grey);
        }
    }

    a{
        width: fit-content;
        display: flex;
        align-items: center;
        padding: 6px 8px;
        border-radius: 8px;
        gap: 10px;
        background-color: var(--pk-point);
        color: var(--pk-light-grey);
        cursor: pointer;
    }
`

export default FormViewerWrapper