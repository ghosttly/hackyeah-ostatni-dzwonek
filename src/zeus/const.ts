/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		suggestionUnivesties:{

		}
	},
	Mutation:{
		createBotDialogue:{
			userPayload:"DialogueInput",
			botPayload:"DialogueInput"
		},
		reactOnConversation:{

		}
	},
	DialogueRole: "enum" as const,
	DialogueInput:{
		role:"DialogueRole"
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		listJobs:"Job",
		suggestionUnivesties:"Path"
	},
	Job:{
		_id:"String",
		conversationCountWhenCreated:"Int",
		createdAt:"String",
		files:"String",
		fineTuneModel:"String",
		tuneId:"String"
	},
	Mutation:{
		createBotDialogue:"String",
		reactOnConversation:"Boolean",
		testEndpoint:"Boolean",
		useFineTuneJob:"Boolean"
	},
	Path:{
		_id:"String",
		name:"String",
		tags:"String",
		university:"University"
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