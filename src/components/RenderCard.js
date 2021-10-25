import RenderSvg from "./RenderSvg"

function RenderCard({card, zeroDealClass}) {
    return (
        <div className={`card ${zeroDealClass}`} style={{color: card.color, borderColor: card.color}}>
            <div className="cardInner cardTop">
                <span className="cardRank">{card.Rank}</span>
                <span className="cardSuit"><RenderSvg suit={card.Suit} /></span>
            </div>
            <div className="cardInner cardBottom">
                <span className="cardRank">{card.Rank}</span>
                <span className="cardSuit"><RenderSvg suit={card.Suit} /></span>
            </div>
        </div>
    )
}

export default RenderCard