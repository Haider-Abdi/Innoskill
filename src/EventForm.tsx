import { useState } from "react";
import FormWrapper from "./FormWrapper";

type EventData = {
  event: string[],
}

type EventFormProps = EventData & {
  updateFields: (fields: any) => void,
  prices: number,
  setPrices: any
}

export function EventFrom({
  event,
  updateFields,
  prices,
  setPrices
}: EventFormProps) {

  const [selectedEvents, setSelectedEvents] = useState<string[]>(event);
  

  const handleEventSelection = (selectedEvent: string) => {
    if (selectedEvents.includes(selectedEvent)) {
      const temp = selectedEvents.filter(event => event !== selectedEvent)
      setSelectedEvents(temp);
      setPrices(100 * (temp.length - 1));
      console.log(temp);
    } else {
      const temp = [...selectedEvents, selectedEvent];
      setSelectedEvents(temp);
      setPrices(100 * (temp.length - 1));
      console.log(temp);
      
    }
    updateFields({ event: selectedEvents });
    
  }


  return (
    <FormWrapper title="Events">
      <label className="container-event">
        <h1 className="">Innoskill Engineering Drift and Design</h1>
        <div className="events">
          <div className="event-item">
            <label>Theme Based Model Demo (Srijan)</label>
            <input type="checkbox" value="themeBasedModelDemo" checked={selectedEvents.includes("themeBasedModelDemo")} onChange={() => handleEventSelection("themeBasedModelDemo")} />
          </div>

          <div className="event-item">
            <label>Best out of Waste (Nav Shrijan)</label>
            <input type="checkbox" value="bestOutOfWaste" checked={selectedEvents.includes("bestOutOfWaste")} onChange={() => handleEventSelection("bestOutOfWaste")} />
          </div>

          <div className="event-item">
            <label>Code Debugging</label>
            <input type="checkbox" value="codeDebugging" checked={selectedEvents.includes("codeDebugging")} onChange={() => handleEventSelection("codeDebugging")} />
          </div>

          <div className="event-item">
            <label>LAN Gaming</label>
            <input type="checkbox" value="lanGaming" checked={selectedEvents.includes("lanGaming")} onChange={() => handleEventSelection("lanGaming")} />
          </div>

          <div className="event-item">
            <label>BioGenius</label>
            <input type="checkbox" value="bioGenius" checked={selectedEvents.includes("bioGenius")} onChange={() => handleEventSelection("bioGenius")} />
          </div>

          <div className="event-item">
            <label>Vista Vibes- Video Blog</label>
            <input type="checkbox" value="vistaVibes" checked={selectedEvents.includes("vistaVibes")} onChange={() => handleEventSelection("vistaVibes")} />
          </div>

          <div className="event-item">
            <label>Technical Memes</label>
            <input type="checkbox" value="technicalMemes" checked={selectedEvents.includes("technicalMemes")} onChange={() => handleEventSelection("technicalMemes")} />
          </div>

          <div className="event-item">
            <label>Build a Circuit</label>
            <input type="checkbox" value="buildCircuit" checked={selectedEvents.includes("buildCircuit")} onChange={() => handleEventSelection("buildCircuit")} />
          </div>

          <div className="event-item">
            <label>Workshop on 3D Printing</label>
            <input type="checkbox" value="workshop3dPrinting" checked={selectedEvents.includes("workshop3dPrinting")} onChange={() => handleEventSelection("workshop3dPrinting")} />
          </div>

          <div className="event-item">
            <label>Workshop on Laser Cutting and Design</label>
            <input type="checkbox" value="workshopLaserCutting" checked={selectedEvents.includes("workshopLaserCutting")} onChange={() => handleEventSelection("workshopLaserCutting")} />
          </div>

          <div className="event-item">
            <label>EV Quiz Challenge</label>
            <input type="checkbox" value="evQuizChallenge" checked={selectedEvents.includes("evQuizChallenge")} onChange={() => handleEventSelection("evQuizChallenge")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Business and Management Conundrum</h1>
        <div className="events">
          <div className="event-item">
            <label>Pro Launch 2024</label>
            <input type="checkbox" value="proLaunch2024" checked={selectedEvents.includes("proLaunch2024")} onChange={() => handleEventSelection("proLaunch2024")} />
          </div>

          <div className="event-item">
            <label>Ideattrakt</label>
            <input type="checkbox" value="ideattrakt" checked={selectedEvents.includes("ideattrakt")} onChange={() => handleEventSelection("ideattrakt")} />
          </div>

          <div className="event-item">
            <label>Poster Making</label>
            <input type="checkbox" value="posterMaking" checked={selectedEvents.includes("posterMaking")} onChange={() => handleEventSelection("posterMaking")} />
          </div>

          <div className="event-item">
            <label>Finance Ki Pathshala</label>
            <input type="checkbox" value="financeKiPathshala" checked={selectedEvents.includes("financeKiPathshala")} onChange={() => handleEventSelection("financeKiPathshala")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Healthcare Mystery</h1>
        <div className="events">
          <div className="event-item">
            <label>Workshop on Somatotyping</label>
            <input type="checkbox" value="workshopSomatotyping" checked={selectedEvents.includes("workshopSomatotyping")} onChange={() => handleEventSelection("workshopSomatotyping")} />
          </div>

          <div className="event-item">
            <label>WellTech Innovate Challenge</label>
            <input type="checkbox" value="wellTechInnovateChallenge" checked={selectedEvents.includes("wellTechInnovateChallenge")} onChange={() => handleEventSelection("wellTechInnovateChallenge")} />
          </div>

          <div className="event-item">
            <label>Best out of food waste challenge</label>
            <input type="checkbox" value="bestOutOfFoodWaste" checked={selectedEvents.includes("bestOutOfFoodWaste")} onChange={() => handleEventSelection("bestOutOfFoodWaste")} />
          </div>

          <div className="event-item">
            <label>YuvaFlex Fusion Challenge</label>
            <input type="checkbox" value="yuvaFlexFusionChallenge" checked={selectedEvents.includes("yuvaFlexFusionChallenge")} onChange={() => handleEventSelection("yuvaFlexFusionChallenge")} />
          </div>

          <div className="event-item">
            <label>Pseudo Recipe Competition</label>
            <input type="checkbox" value="pseudoRecipeCompetition" checked={selectedEvents.includes("pseudoRecipeCompetition")} onChange={() => handleEventSelection("pseudoRecipeCompetition")} />
          </div>

          <div className="event-item">
            <label>Rescue Rangers Workshop</label>
            <input type="checkbox" value="rescueRangersWorkshop" checked={selectedEvents.includes("rescueRangersWorkshop")} onChange={() => handleEventSelection("rescueRangersWorkshop")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Sustainathon</h1>
        <div className="events">
          <div className="event-item">
            <label>Sustainathon</label>
            <input type="checkbox" value="sustainathon" checked={selectedEvents.includes("sustainathon")} onChange={() => handleEventSelection("sustainathon")} />
          </div>

          <div className="event-item">
            <label>Eco-reel</label>
            <input type="checkbox" value="ecoReel" checked={selectedEvents.includes("ecoReel")} onChange={() => handleEventSelection("ecoReel")} />
          </div>

          <div className="event-item">
            <label>My community My Ad</label>
            <input type="checkbox" value="myCommunityMyAd" checked={selectedEvents.includes("myCommunityMyAd")} onChange={() => handleEventSelection("myCommunityMyAd")} />
          </div>

          <div className="event-item">
            <label>Know your C-footprint</label>
            <input type="checkbox" value="knowYourCFootprint" checked={selectedEvents.includes("knowYourCFootprint")} onChange={() => handleEventSelection("knowYourCFootprint")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Culinary and Hospitality</h1>
        <div className="events">
          <div className="event-item">
            <label>Workshop on Coffee: Journey of coffee "Bean to cup" supported by Lavazza</label>
            <input type="checkbox" value="workshopCoffee" checked={selectedEvents.includes("workshopCoffee")} onChange={() => handleEventSelection("workshopCoffee")} />
          </div>

          <div className="event-item">
            <label>Millet Cook off Challenge</label>
            <input type="checkbox" value="milletCookOff" checked={selectedEvents.includes("milletCookOff")} onChange={() => handleEventSelection("milletCookOff")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Law Knot</h1>
        <div className="events">
          <div className="event-item">
            <label>Parliamentary Debate</label>
            <input type="checkbox" value="parliamentaryDebate" checked={selectedEvents.includes("parliamentaryDebate")} onChange={() => handleEventSelection("parliamentaryDebate")} />
          </div>

          <div className="event-item">
            <label>Manifesto</label>
            <input type="checkbox" value="manifesto" checked={selectedEvents.includes("manifesto")} onChange={() => handleEventSelection("manifesto")} />
          </div>

          <div className="event-item">
            <label>Policy & Preamble Quiz</label>
            <input type="checkbox" value="policyPreambleQuiz" checked={selectedEvents.includes("policyPreambleQuiz")} onChange={() => handleEventSelection("policyPreambleQuiz")} />
          </div>

          <div className="event-item">
            <label>Reformative Policy Drafting</label>
            <input type="checkbox" value="reformativePolicyDrafting" checked={selectedEvents.includes("reformativePolicyDrafting")} onChange={() => handleEventSelection("reformativePolicyDrafting")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Media and Literary Stumper</h1>
        <div className="events">
          <div className="event-item">
            <label>Techno- Vogue "Technology Fashion Walk"</label>
            <input type="checkbox" value="technoVogue" checked={selectedEvents.includes("technoVogue")} onChange={() => handleEventSelection("technoVogue")} />
          </div>

          <div className="event-item">
            <label>Spell Bee Competition "Who will be the Spell Bee Champion"</label>
            <input type="checkbox" value="spellBeeCompetition" checked={selectedEvents.includes("spellBeeCompetition")} onChange={() => handleEventSelection("spellBeeCompetition")} />
          </div>

          <div className="event-item">
            <label>Innovoice "RJ Hunt"</label>
            <input type="checkbox" value="innovoice" checked={selectedEvents.includes("innovoice")} onChange={() => handleEventSelection("innovoice")} />
          </div>

          <div className="event-item">
            <label>SnapFlickShowdown: "Reel Making Competition"</label>
            <input type="checkbox" value="snapFlickShowdown" checked={selectedEvents.includes("snapFlickShowdown")} onChange={() => handleEventSelection("snapFlickShowdown")} />
          </div>
        </div>
      </label>

      <label className="container-event">
        <h1 className="">Innoskill Social Spectrum</h1>
        <div className="events">
          <div className="event-item">
            <label>Shark tank 2.O (AWAKE THE ENTERPRENEUR WITHIN YOU)</label>
            <input type="checkbox" value="sharkTank2" checked={selectedEvents.includes("sharkTank2")} onChange={() => handleEventSelection("sharkTank2")} />
          </div>

          <div className="event-item">
            <label>PRAJAKIYA – The Rules of People "Global Warming and Environment Conservation"</label>
            <input type="checkbox" value="prajakiya" checked={selectedEvents.includes("prajakiya")} onChange={() => handleEventSelection("prajakiya")} />
          </div>

          <div className="event-item">
            <label>Move To The Groove "Exploring the inner self through creative movement"</label>
            <input type="checkbox" value="moveToTheGroove" checked={selectedEvents.includes("moveToTheGroove")} onChange={() => handleEventSelection("moveToTheGroove")} />
          </div>
        </div>
      </label>
      <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl">
        Price: {prices}
      </div>
    </FormWrapper>
  )
}