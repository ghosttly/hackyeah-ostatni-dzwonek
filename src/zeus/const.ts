/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueInput:{
		role:"DialogueRole"
	},
	DialogueRole: "enum" as const,
	Query:{
		suggestionUnivesties:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		files:"String",
		fineTuneModel:"String",
		tuneId:"String"
	},
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
	},
	Query:{
		listJobs:"Job",
		suggestionUnivesties:"Path"
	},
	University:{
		name:"String",
		paths:"Path",
		website:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}