/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		createBotDialogue:{
			payload:"BotDialogueInput"
		},
		reactOnConversation:{

		}
	},
	BotDialogueInput:{
		role:"DialogueRole"
	},
	DialogueRole: "enum" as const,
	Query:{
		getUniByTags:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		useFineTuneJob:"Boolean"
	},
	Query:{
		getUniByTags:"Path",
		listTags:"String",
		listUnis:"University"
	},
	University:{
		name:"String",
		paths:"String"
	},
	Path:{
		name:"String",
		tags:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}