class AppAction {
    action: string
    impact_no: number
    impact_symbol: string
    impact_type: string
    span: number
    constructor(action: string, impact_no: number, impact_symbol: string, impact_type: string, span: number) {
        this.action = action
        this.impact_no = impact_no
        this.impact_symbol = impact_symbol
        this.impact_type = impact_type
        this.span = span
    }
    
}

//  [0-3 are pensioners, 4-9 are adults, 10-12 are babies, 13-15 are eggs]
let ducks_alive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 1, 2, 3]
let ducks_dead = 0
let birthRate = 0.5
let current_actions : AppAction[] = []
// possible_actions = {'Detonate a thermonuclear bomb in the lake': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.01', 'span': '1'}, 'Introduce more nesting sites': {'impact_type': 'egg', 'impact_symbol': 'PLUS', 'impact_no': '10', 'span': '1'}, 'Release more ducks into the lake': {'impact_type': 'living', 'impact_symbol': 'PLUS', 'impact_no': '15', 'span': '1'}, 'Encourage visitors to feed the ducks': {'impact_type': 'all', 'impact_symbol': 'PLUS', 'impact_no': '8', 'span': '1'}, 'Introduce artificial nesting platforms': {'impact_type': 'egg', 'impact_symbol': 'PLUS', 'impact_no': '12', 'span': '1'}, 'Relocate ducks from overcrowded areas': {'impact_type': 'living', 'impact_symbol': 'PLUS', 'impact_no': '10', 'span': '1'}, 'Conservation group rescues injured ducks': {'impact_type': 'adult', 'impact_symbol': 'PLUS', 'impact_no': '7', 'span': '1'}, 'Provide floating platforms for safer nesting': {'impact_type': 'egg', 'impact_symbol': 'PLUS', 'impact_no': '9', 'span': '1'}, 'Farmers reduce pesticide use': {'impact_type': 'all', 'impact_symbol': 'PLUS', 'impact_no': '8', 'span': '3'}, 'Build safe winter shelters for ducks': {'impact_type': 'living', 'impact_symbol': 'PLUS', 'impact_no': '10', 'span': '2'}, 'Introduce fish stocking to improve food supply': {'impact_type': 'all', 'impact_symbol': 'PLUS', 'impact_no': '12', 'span': '3'}, 'Predators removed entirely from the area': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.7', 'span': '6'}, 'Restore wetland areas': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.15', 'span': '10'}, 'Build a protected duck sanctuary': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.2', 'span': '10'}, 'Regulate fishing to preserve food supply': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.3', 'span': '4'}, 'Encourage migration with feeding stations': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.1', 'span': '3'}, 'Limit human access to nesting sites': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.15', 'span': '5'}, 'A fox enters the lake and hunts ducks': {'impact_type': 'living', 'impact_symbol': 'MINUS', 'impact_no': '5', 'span': '1'}, 'A local festival disturbs the ducks': {'impact_type': 'living', 'impact_symbol': 'MINUS', 'impact_no': '5', 'span': '1'}, 'Dominant ducks fight over territory': {'impact_type': 'adult', 'impact_symbol': 'MINUS', 'impact_no': '3', 'span': '1'}, 'Raccoons steal eggs from nests': {'impact_type': 'egg', 'impact_symbol': 'MINUS', 'impact_no': '7', 'span': '1'}, 'Overfishing reduces available food': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.9', 'span': '5'}, 'A cold snap reduces food availability': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.85', 'span': '3'}, 'A hot summer dries up parts of the lake': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.95', 'span': '4'}, 'A sudden food shortage lowers survival': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.8', 'span': '5'}, 'A severe storm damages nesting sites': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.75', 'span': '2'}, 'A harsh winter reduces duck survival': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.8', 'span': '5'}, 'A pollution spill contaminates the water': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.7', 'span': '8'}, 'A late frost disrupts egg hatching': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.9', 'span': '4'}, 'Illegal hunting increases': {'impact_type': 'living', 'impact_symbol': 'MINUS', 'impact_no': '6', 'span': '1'}, 'Destroy overpopulated nesting areas': {'impact_type': 'egg', 'impact_symbol': 'MINUS', 'impact_no': '8', 'span': '1'}, 'Clear vegetation, reducing cover for nests': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.85', 'span': '3'}, 'Heavy rainfall floods nests': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.8', 'span': '2'}, 'A dry season reduces water levels': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.9', 'span': '5'}, 'Accidental pesticide spill reduces food sources': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.75', 'span': '4'}, 'Allow pet cats to roam near the lake': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.8', 'span': '3'}, 'Plant trees for more shelter': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.15', 'span': '6'}, 'Ban human feeding to prevent dependency': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.9', 'span': '4'}, 'Farm runoff increases algae': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.85', 'span': '6'}, 'Limited water due to drought': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.75', 'span': '7'}, 'Heavy boat traffic disturbs ducks': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.9', 'span': '5'}, 'Dumping of waste reduces water quality': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.7', 'span': '8'}, 'Introduce a new duck species to the lake': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.5', 'span': '5'}, 'Massive duck release for conservation': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.8', 'span': '4'}, 'A new virus emerges, significantly lowering survival': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.6', 'span': '8'}, 'A mysterious toxin enters the water': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.5', 'span': '7'}, 'Uncontrolled algae bloom depletes oxygen': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.4', 'span': '6'}, 'Farmers introduce pest control chemicals': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.3', 'span': '6'}, 'A major flood displaces most ducks': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.2', 'span': '5'}, 'A long-term drought dries up part of the lake': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.3', 'span': '7'}, 'Local government funds a massive wetland expansion': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.8', 'span': '5'}, 'Conservation efforts lead to a major baby boom': {'impact_type': 'baby', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.9', 'span': '4'}, 'Invasive species eradicated': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '1.7', 'span': '6'}, 'Farm pollution causes reproductive issues': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.7', 'span': '6'}, 'A new predator population spikes': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.6', 'span': '7'}, 'Fish stocks collapse, causing food shortages': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.5', 'span': '5'}, 'Perfect environmental conditions cause a baby boom': {'impact_type': 'baby', 'impact_symbol': 'MULTIPLY', 'impact_no': '3', 'span': '4'}, 'A record-breaking mating season doubles the duck population': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '2', 'span': '5'}, 'A protected wetland expands, providing ideal conditions': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '2.2', 'span': '8'}, 'An invasive predator is completely eradicated': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '2.5', 'span': '6'}, 'Extreme overbreeding leads to a duck population boom': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '2.5', 'span': '5'}, 'A nuclear accident poisons the ecosystem': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.01', 'span': '10'}, 'A massive oil spill devastates the lake': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.1', 'span': '10'}, 'A new disease wipes out most ducks': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.05', 'span': '9'}, 'A factory explosion pollutes the entire lake': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.1', 'span': '10'}, 'An unprecedented drought completely dries up the lake': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.02', 'span': '10'}, 'Illegal poaching wipes out an entire generation': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.1', 'span': '8'}, 'Major flooding washes away nearly all nests': {'impact_type': 'egg', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.2', 'span': '7'}, 'Invasive super-predators completely disrupt the ecosystem': {'impact_type': 'living', 'impact_symbol': 'MULTIPLY', 'impact_no': '0.25', 'span': '9'}, 'Governments introduce a large-scale breeding program': {'impact_type': 'all', 'impact_symbol': 'MULTIPLY', 'impact_no': '3', 'span': '6'}}
let possible_actions_list = [["Detonate a thermonuclear bomb in the lake", "all", "MULTIPLY", "0.01", "1"], ["Introduce more nesting sites", "egg", "PLUS", "10", "1"], ["Release more ducks into the lake", "living", "PLUS", "15", "1"], ["Encourage visitors to feed the ducks", "all", "PLUS", "8", "1"], ["Introduce artificial nesting platforms", "egg", "PLUS", "12", "1"], ["Relocate ducks from overcrowded areas", "living", "PLUS", "10", "1"], ["Conservation group rescues injured ducks", "adult", "PLUS", "7", "1"], ["Provide floating platforms for safer nesting", "egg", "PLUS", "9", "1"], ["Farmers reduce pesticide use", "all", "PLUS", "8", "3"], ["Build safe winter shelters for ducks", "living", "PLUS", "10", "2"], ["Introduce fish stocking to improve food supply", "all", "PLUS", "12", "3"], ["Predators removed entirely from the area", "living", "MULTIPLY", "1.7", "6"], ["Restore wetland areas", "living", "MULTIPLY", "1.15", "10"], ["Build a protected duck sanctuary", "living", "MULTIPLY", "1.2", "10"], ["Regulate fishing to preserve food supply", "egg", "MULTIPLY", "1.3", "4"], ["Encourage migration with feeding stations", "living", "MULTIPLY", "1.1", "3"], ["Limit human access to nesting sites", "egg", "MULTIPLY", "1.15", "5"], ["A fox enters the lake and hunts ducks", "living", "MINUS", "5", "1"], ["A local festival disturbs the ducks", "living", "MINUS", "5", "1"], ["Dominant ducks fight over territory", "adult", "MINUS", "3", "1"], ["Raccoons steal eggs from nests", "egg", "MINUS", "7", "1"], ["Overfishing reduces available food", "all", "MULTIPLY", "0.9", "5"], ["A cold snap reduces food availability", "living", "MULTIPLY", "0.85", "3"], ["A hot summer dries up parts of the lake", "all", "MULTIPLY", "0.95", "4"], ["A sudden food shortage lowers survival", "living", "MULTIPLY", "0.8", "5"], ["A severe storm damages nesting sites", "living", "MULTIPLY", "0.75", "2"], ["A harsh winter reduces duck survival", "living", "MULTIPLY", "0.8", "5"], ["A pollution spill contaminates the water", "living", "MULTIPLY", "0.7", "8"], ["A late frost disrupts egg hatching", "egg", "MULTIPLY", "0.9", "4"], ["Illegal hunting increases", "living", "MINUS", "6", "1"], ["Destroy overpopulated nesting areas", "egg", "MINUS", "8", "1"], ["Clear vegetation, reducing cover for nests", "egg", "MULTIPLY", "0.85", "3"], ["Heavy rainfall floods nests", "egg", "MULTIPLY", "0.8", "2"], ["A dry season reduces water levels", "living", "MULTIPLY", "0.9", "5"], ["Accidental pesticide spill reduces food sources", "all", "MULTIPLY", "0.75", "4"], ["Allow pet cats to roam near the lake", "living", "MULTIPLY", "0.8", "3"], ["Plant trees for more shelter", "living", "MULTIPLY", "1.15", "6"], ["Ban human feeding to prevent dependency", "all", "MULTIPLY", "0.9", "4"], ["Farm runoff increases algae", "all", "MULTIPLY", "0.85", "6"], ["Limited water due to drought", "all", "MULTIPLY", "0.75", "7"], ["Heavy boat traffic disturbs ducks", "living", "MULTIPLY", "0.9", "5"], ["Dumping of waste reduces water quality", "all", "MULTIPLY", "0.7", "8"], ["Introduce a new duck species to the lake", "living", "MULTIPLY", "1.5", "5"], ["Massive duck release for conservation", "living", "MULTIPLY", "1.8", "4"], ["A new virus emerges, significantly lowering survival", "living", "MULTIPLY", "0.6", "8"], ["A mysterious toxin enters the water", "living", "MULTIPLY", "0.5", "7"], ["Uncontrolled algae bloom depletes oxygen", "living", "MULTIPLY", "0.4", "6"], ["Farmers introduce pest control chemicals", "all", "MULTIPLY", "0.3", "6"], ["A major flood displaces most ducks", "living", "MULTIPLY", "0.2", "5"], ["A long-term drought dries up part of the lake", "all", "MULTIPLY", "0.3", "7"], ["Local government funds a massive wetland expansion", "all", "MULTIPLY", "1.8", "5"], ["Conservation efforts lead to a major baby boom", "baby", "MULTIPLY", "1.9", "4"], ["Invasive species eradicated", "living", "MULTIPLY", "1.7", "6"], ["Farm pollution causes reproductive issues", "egg", "MULTIPLY", "0.7", "6"], ["A new predator population spikes", "living", "MULTIPLY", "0.6", "7"], ["Fish stocks collapse, causing food shortages", "all", "MULTIPLY", "0.5", "5"], ["Perfect environmental conditions cause a baby boom", "baby", "MULTIPLY", "3", "4"], ["A record-breaking mating season doubles the duck population", "living", "MULTIPLY", "2", "5"], ["A protected wetland expands, providing ideal conditions", "living", "MULTIPLY", "2.2", "8"], ["An invasive predator is completely eradicated", "living", "MULTIPLY", "2.5", "6"], ["Extreme overbreeding leads to a duck population boom", "all", "MULTIPLY", "2.5", "5"], ["A nuclear accident poisons the ecosystem", "all", "MULTIPLY", "0.01", "10"], ["A massive oil spill devastates the lake", "living", "MULTIPLY", "0.1", "10"], ["A new disease wipes out most ducks", "living", "MULTIPLY", "0.05", "9"], ["A factory explosion pollutes the entire lake", "all", "MULTIPLY", "0.1", "10"], ["An unprecedented drought completely dries up the lake", "all", "MULTIPLY", "0.02", "10"], ["Illegal poaching wipes out an entire generation", "living", "MULTIPLY", "0.1", "8"], ["Major flooding washes away nearly all nests", "egg", "MULTIPLY", "0.2", "7"], ["Invasive super-predators completely disrupt the ecosystem", "living", "MULTIPLY", "0.25", "9"], ["Governments introduce a large-scale breeding program", "all", "MULTIPLY", "3", "6"]]
let actionA : AppAction = null
let actionB : AppAction = null
let gameOver = false
function perform_action(action: AppAction, isNewAction: boolean) {
    let i: number;
    let placeholder: number;
    let ducksAliveAtIndex: number;
    /** 
    Perform the action on the ducks_alive list
    Also, apply the actions in the current_actions list and reduce the span of each action by 1
    
 */
    
    action.span -= 1
    if (isNewAction) {
        current_actions.push(action)
    }
    
    let alive_ducks_before = 0
    // sum(ducks_alive[0:13])
    let counter = 0
    while (counter < 13) {
        alive_ducks_before = alive_ducks_before + ducks_alive[counter]
        counter = counter + 1
    }
    //  Start and End Index are set as if ImpactType is all for ease of implementation
    let startIndex = 0
    let endIndex = 16
    if (action.impact_type == "adult") {
        //  Just for this case adult = adult + old
        endIndex = 10
    } else if (action.impact_type == "old") {
        endIndex = 4
    } else if (action.impact_type == "baby") {
        startIndex = 10
        endIndex = 13
    } else if (action.impact_type == "egg") {
        startIndex = 13
    } else if (action.impact_type == "living") {
        endIndex = 13
    }
    
    //  Calculate all variables required for changing ducks_alive with this action
    let stepLoop = 1
    let changeInDucks = 0
    let totalChangeInDucks = 0
    if (action.impact_symbol == "MULTIPLY") {
        for (i = startIndex; i < endIndex; i++) {
            ducks_alive[i] *= action.impact_no
            ducks_alive[i] = parseInt("" + ducks_alive[i])
            if (ducks_alive[i] < 0) {
                ducks_alive[i] = 0
            }
            
        }
    } else {
        if (action.impact_symbol == "PLUS") {
            //  If we need to add ducks, we'll start with the back of the array
            placeholder = startIndex
            startIndex = endIndex - 1
            endIndex = placeholder - 1
            stepLoop = -1
            totalChangeInDucks = Math.trunc(action.impact_no)
        } else if (action.impact_symbol == "MINUS") {
            totalChangeInDucks -= Math.trunc(action.impact_no)
        }
        
        counter = startIndex
        while (counter < endIndex) {
            // for i in range(startIndex, endIndex, stepLoop):
            ducksAliveAtIndex = ducks_alive[i]
            ducks_alive[i] += totalChangeInDucks
            if (ducks_alive[i] < 0) {
                ducks_alive[i] = 0
            }
            
            changeInDucks += Math.abs(ducks_alive[i] - ducksAliveAtIndex)
            if (changeInDucks > action.impact_no) {
                ducks_alive[i] = changeInDucks - action.impact_no
                break
            } else if (changeInDucks == action.impact_no) {
                break
            }
            
            counter = counter + 1
        }
    }
    
    //  All not old adults give birth to a baby
    let babiesMade = 0
    // sum(ducks_alive[4:10]) * birthRate
    counter = 4
    while (counter < 10) {
        babiesMade = babiesMade + ducks_alive[counter]
        counter = counter + 1
    }
    babiesMade = babiesMade * birthRate
    ducks_alive[15] += Math.trunc(babiesMade)
    //  Statistics + Update ducks_dead
    let alive_ducks_after = 0
    // sum(ducks_alive[0:13]) # 0-12 are living ducks
    counter = 0
    while (counter < 13) {
        alive_ducks_after = alive_ducks_after + ducks_alive[counter]
        counter = counter + 1
    }
    if (alive_ducks_before - alive_ducks_after > 0) {
        ducks_dead += alive_ducks_before - alive_ducks_after
    }
    
}

// print(f"{action.action} performed, {action.impact_no} {action.impact_symbol} {action.impact_type} for {action.span} turns")
function process_longstanding_effects() {
    for (let action of current_actions) {
        if (action.span < 1) {
            current_actions.removeElement(action)
            break
        }
        
        if (action.span == 1) {
            current_actions.removeElement(action)
        }
        
        perform_action(action, false)
    }
}

//  perform_action already reduces the span by 1
//  Should be called after perform_action
function update_ducks_alive() {
    
    ducks_dead += ducks_alive[0]
    ducks_alive = ducks_alive.slice(1).concat([0])
}

//  Move all ducks one step to the left and add 0 to the right
function on_button_press(action: AppAction) {
    
    process_longstanding_effects()
    perform_action(action, true)
    update_ducks_alive()
    game.splash(`Ducks Alive: \{ducks_alive\}
Ducks Dead: \{ducks_dead\}`)
    console.log("Ducks Alive: {ducks_alive}")
    console.log("Ducks Dead: {ducks_dead}")
    let sum_ducks_alive = 0
    let counter = 0
    while (counter < ducks_alive.length) {
        sum_ducks_alive = sum_ducks_alive + ducks_alive[counter]
        counter = counter + 1
    }
    if (sum_ducks_alive < 1) {
        game.gameOver(false)
        return
    }
    
    //  Select random action A
    //  Select random action B
    //  Check that action A is different to action B
    //  Show both actions on screen
    boot_up()
}

function boot_up() {
    
    //  Select random action A
    let action_a = possible_actions_list[randint(0, possible_actions_list.length)]
    // random.choice(list(possible_actions.keys()))
    actionA = new AppAction(action_a[0], parseFloat(action_a[3]), action_a[2], action_a[1], parseInt(action_a[4]))
    //  Select random action B
    let action_b = possible_actions_list[randint(0, possible_actions_list.length)]
    // random.choice(list(possible_actions.keys()))
    while (action_b == action_a) {
        action_b = possible_actions_list[randint(0, possible_actions_list.length)]
    }
    // random.choice(list(possible_actions.keys()))
    actionB = new AppAction(action_b[0], parseFloat(action_b[3]), action_b[2], action_b[1], parseInt(action_b[4]))
    //  Check that action A is different to action B
    //  Show both actions on screen
    console.log("Action A: {actionA.action}")
    console.log("Action B: {actionB.action}")
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    on_button_press(actionA)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    on_button_press(actionB)
})
boot_up()
game.setGameOverEffect(false, effects.melt)
game.setGameOverMessage(false, "all the ducks r dead :(")
game.setGameOverPlayable(false, music.melodyPlayable(music.siren), true)
