import RenderSvg from "./RenderSvg"

function RenderCard({card, zeroDealClass, flip, cardClass}) {
    return (
        <div className={`card ${cardClass} ${flip} ${zeroDealClass}`}>
            <div className={`cardFront ${zeroDealClass}`} style={{color: card.color, borderColor: card.color}}>
                <div className="cardInner cardTop">
                    <span className="cardRank">{card.Rank}</span>
                    <span className="cardSuit"><RenderSvg suit={card.Suit} /></span>
                </div>
                <div className="cardInner cardBottom">
                    <span className="cardRank">{card.Rank}</span>
                    <span className="cardSuit"><RenderSvg suit={card.Suit} /></span>
                </div>
            </div>
            <div className={`cardBack ${zeroDealClass}`}>
            </div>
        </div>
    )
}

export default RenderCard