import { ReactComponent as PgComplete } from '../../../icons/pg-complete.svg';

function ProgressStep({step, phase, number, label}){
    return(
        <span className={`progress-group ${step > number ? 'active' : ''}`} data-phase={phase}>
            <span className="progress-icon">
                <span className="progress-text">
                    {step >= number ? <PgComplete className="icon cursor-point" /> : number}
                </span>
            </span>
            <span className="progress-label">{label}</span>
        </span>
    )
}

export default function StepProgress({step}){

    return(
        <section className="progress-container col col-12">
            <ProgressStep 
                step={step}
                phase="address"
                number={1}
                label="寄送地址"
            />

            <span className="progress-bar" data-order="1"></span>

            <ProgressStep 
                step={step}
                phase="shipping"
                number={2}
                label="運送方式"
            />

            <span className="progress-bar" data-order="2"></span>

            <ProgressStep 
                step={step}
                phase="credit-card"
                number={3}
                label="付款資訊"
            />
        </section>
    )
}  

/*return(
    <section className="progress-container col col-12">
    <span className={`progress-group ${step === 1 ? 'active' : ''}`} data-phase="address">
        <span className="progress-icon">
            {step === 1 ? <span className="text">1</span>
            :<PgComplete className="icon cursor-point" />}
        </span>
        <span className="progress-label">寄送地址</span>
    </span>
    <span className="progress-bar" data-order="1"></span>
    <span className={`progress-group ${step === 2 ? 'active' : ''}`} data-phase="shipping">
        <span className="progress-icon">
            <span className="text">2</span>
            <PgComplete className="icon cursor-point" />
        </span>
        <span className="progress-label">運送方式</span>
    </span>
    <span className="progress-bar" data-order="2"></span>
    <span className={`progress-group ${step === 3 ? 'active' : ''}`} data-phase="credit-card">
        <span className="progress-icon">
            <span className="text">3</span>
            <PgComplete className="icon cursor-point" />
        </span>
        <span className="progress-label">付款資訊</span>
    </span>
/*</section>)*/