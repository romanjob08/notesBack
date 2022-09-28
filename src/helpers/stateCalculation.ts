import {Note} from "../notes/repositories/notes.repository";


const active = (notes: Note[]): number => {
  return notes.filter(item => item.active).length
}
const archive = (notes: Note[]): number => {
  return notes.filter(item => !item.active).length
}

export const StateCalculation = (notes: Note[]) => {
    const tasks = notes.filter(item => item.category === 'Task')
    const ideas = notes.filter(item => item.category === 'Idea')
    const randomThoughts = notes.filter(item => item.category === 'Random Thought')
    return {
        active: {
            idea: active(ideas),
            task: active(tasks),
            random_thought: active(randomThoughts),
        },
        archive: {
            idea: archive(ideas),
            task: archive(tasks),
            random_thought: archive(randomThoughts)
        }
    }
}