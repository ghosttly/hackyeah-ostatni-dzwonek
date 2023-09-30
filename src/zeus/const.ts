/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	BotDialogueInput:{
		role:"DialogueRole"
	},
	Query:{
		getUniByTags:{

		}
	},
	Mutation:{
		createBotDialogue:{
			payload:"BotDialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueRole: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	Path:{
		_id:"String",
		name:"String",
		tags:"String"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		file:"String",
		tuneId:"String"
	},
	University:{
		name:"String",
		paths:"Path"
	},
	Query:{
		getUniByTags:"Path",
		listJobs:"Job",
		listUnis:"University"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}