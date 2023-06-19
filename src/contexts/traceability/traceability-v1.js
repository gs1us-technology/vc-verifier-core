export const traceability_v1 = {
    "@context": {
      "@version": 1.1,
      "@vocab": "https://w3id.org/traceability/#undefinedTerm",
      "AgricultureActivity": {
        "@context": {
          "activityDate": {
            "@id": "https://schema.org/DateTime"
          },
          "activityType": {
            "@id": "https://schema.org/value"
          },
          "actor": {
            "@id": "https://w3id.org/traceability#Person"
          },
          "agricultureProduct": {
            "@id": "https://schema.org/ItemList"
          },
          "business": {
            "@id": "https://w3id.org/traceability#dfn-entities"
          },
          "location": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "observation": {
            "@id": "https://w3id.org/traceability#observation"
          }
        },
        "@id": "https://w3id.org/traceability#AgricultureActivity"
      },
      "AgricultureInspectionCommonInfo": {
        "@context": {
          "applicant": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "delegateOf": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedOrganization"
          },
          "facility": {
            "@id": "https://www.gs1.org/voc/location"
          },
          "inspectionEnded": {
            "@id": "https://schema.org/endDate"
          },
          "inspectionStarted": {
            "@id": "https://schema.org/startDate"
          },
          "inspector": {
            "@id": "https://w3id.org/traceability#Inspector"
          },
          "regulatoryAgency": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedOrganization"
          }
        },
        "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
      },
      "AgricultureInspectionGeneric": {
        "@context": {
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "inspectionType": {
            "@id": "https://schema.org/value"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "observation": {
            "@id": "https://w3id.org/traceability#observation"
          },
          "shipment": {
            "@id": "https://schema.org/ParcelDelivery"
          },
          "status": {
            "@id": "https://schema.org/status"
          }
        },
        "@id": "https://w3id.org/traceability#AgricultureInspectionGeneric"
      },
      "AgriculturePackage": {
        "@context": {
          "agricultureProduct": {
            "@id": "https://schema.org/ItemList"
          },
          "date": {
            "@id": "https://schema.org/DateTime"
          },
          "grade": {
            "@id": "https://w3id.org/traceability#grade"
          },
          "harvest": {
            "@id": "https://w3id.org/traceability#AgricultureActivity"
          },
          "labelImageHash": {
            "@id": "https://w3id.org/traceability#labelImageHash"
          },
          "labelImageUrl": {
            "@id": "https://schema.org/url"
          },
          "packageName": {
            "@id": "https://schema.org/name"
          },
          "responsibleParty": {
            "@id": "https://w3id.org/traceability#responsibleParty"
          },
          "voicePickCode": {
            "@id": "https://w3id.org/traceability#voicePickCode"
          }
        },
        "@id": "https://w3id.org/traceability#AgriculturePackage"
      },
      "AgricultureParcelDelivery": {
        "@context": {
          "agriculturePackage": {
            "@id": "https://w3id.org/traceability#AgriculturePackage"
          },
          "broker": {
            "@id": "https://schema.org/Organization"
          },
          "carrier": {
            "@id": "https://schema.org/Organization"
          },
          "consignee": {
            "@id": "https://schema.org/Organization"
          },
          "deliveryAddress": {
            "@id": "https://schema.org/deliveryAddress"
          },
          "deliveryMethod": {
            "@id": "https://schema.org/DeliveryMethod"
          },
          "expectedArrival": {
            "@id": "https://schema.org/expectedArrivalFrom"
          },
          "foreignPortExport": {
            "@id": "https://w3id.org/traceability#foreignPortExport"
          },
          "movementPoints": {
            "@id": "https://schema.org/Trip"
          },
          "originAddress": {
            "@id": "https://schema.org/originAddress"
          },
          "portOfEntry": {
            "@id": "https://w3id.org/traceability#portOfEntry"
          },
          "purchaser": {
            "@id": "https://schema.org/Organization"
          },
          "shipper": {
            "@id": "https://schema.org/Organization"
          },
          "specialInstructions": {
            "@id": "https://schema.org/comment"
          },
          "trackingNumber": {
            "@id": "https://schema.org/trackingNumber"
          }
        },
        "@id": "https://w3id.org/traceability#AgricultureParcelDelivery"
      },
      "AgricultureProduct": {
        "@context": {
          "countryOfOrigin": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "gtin": {
            "@id": "https://www.gs1.org/voc/gtin"
          },
          "labelImageHash": {
            "@id": "https://w3id.org/traceability#labelImageHash"
          },
          "labelImageUrl": {
            "@id": "https://schema.org/url"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "plantParts": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "plu": {
            "@id": "https://w3id.org/traceability#plu"
          },
          "product": {
            "@id": "https://www.gs1.org/voc/Product"
          },
          "productImageHash": {
            "@id": "https://w3id.org/traceability#productImageHash"
          },
          "productImageUrl": {
            "@id": "https://schema.org/url"
          },
          "scientificName": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#scientificName"
          },
          "upc": {
            "@id": "https://www.gs1.org/standards/barcodes/ean-upc"
          }
        },
        "@id": "https://w3id.org/traceability#AgricultureProduct"
      },
      "BankAccount": {
        "@context": {
          "BIC11": {
            "@id": "https://w3id.org/traceability#BIC11"
          },
          "accountId": {
            "@id": "https://w3id.org/traceability#accountId"
          },
          "address": {
            "@id": "https://schema.org/PostalAddress"
          },
          "familyName": {
            "@id": "http://schema.org/familyName"
          },
          "givenName": {
            "@id": "http://schema.org/givenName"
          },
          "iban": {
            "@id": "https://w3id.org/traceability#iban"
          },
          "routingInfo": {
            "@id": "https://w3id.org/traceability#routingInfo"
          }
        },
        "@id": "https://w3id.org/traceability#BankAccount"
      },
      "BankAccountCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#BankAccountCredential"
      },
      "BankAccountHolderAffirmation": {
        "@context": {
          "affirmingParty": {
            "@id": "https://w3id.org/traceability#evidenceVerifier"
          },
          "bank": {
            "@id": "https://schema.org/Organization"
          },
          "bankAccountHolderAffirmationApproach": {
            "@id": "https://schema.org/name"
          }
        },
        "@id": "https://w3id.org/traceability#BankAccountHolderAffirmation"
      },
      "BillOfLading": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bookingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Consignment_identifier_carrier_assigned"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "consignor": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "freight": {
            "@id": "https://schema.org/ParcelDelivery"
          },
          "freightForwarder": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#freightForwarderParty"
          },
          "hazardCode": {
            "@id": "https://w3id.org/traceability#hazardCode"
          },
          "nmfcFreightClass": {
            "@id": "https://w3id.org/traceability#nmfcFreightClass"
          },
          "notify": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "particulars": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "portOfDischarge": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl3227/#Place_of_discharge"
          },
          "portOfLoading": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl3227/#Place_of_loading"
          },
          "relatedDocuments": {
            "@id": "https://schema.org/Purchase"
          },
          "scac": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Standard_Carrier_Alpha_Code_(SCAC)_number"
          }
        },
        "@id": "https://w3id.org/traceability#BillOfLading"
      },
      "BillOfLadingCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#BillOfLadingCredential"
      },
      "Brand": {
        "@context": {
          "logo": {
            "@id": "https://schema.org/logo"
          },
          "url": {
            "@id": "https://schema.org/url"
          }
        },
        "@id": "https://schema.org/Brand"
      },
      "BusinessRegistrationVerification": {
        "@context": {
          "affirmingParty": {
            "@id": "https://w3id.org/traceability#affirmingParty"
          },
          "countryOfRegistration": {
            "@id": "https://schema.org/country"
          },
          "registrationUrl": {
            "@id": "https://schema.org/url"
          },
          "taxIdentificationNumber": {
            "@id": "https://vocabulary.uncefact.org/uncl1153#AHP"
          }
        },
        "@id": "https://w3id.org/traceability#BusinessRegistrationVerification"
      },
      "CBP3461ImmediateDeliveryCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CBP3461ImmediateDeliveryCredential"
      },
      "CBP7501EntrySummaryCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CBP7501EntrySummaryCredential"
      },
      "CTPAT": {
        "@context": {
          "ctpatAccountNumber": {
            "@id": "https://w3id.org/traceability#ctpatAccountNumber"
          },
          "ctpatMember": {
            "@id": "https://schema.org/member"
          },
          "dateOfLastValidation": {
            "@id": "https://schema.org/Date"
          },
          "issuingCountry": {
            "@id": "https://schema.org/addressCountry"
          },
          "sviNumber": {
            "@id": "https://w3id.org/traceability#sviNumber"
          },
          "tradeSector": {
            "@id": "https://schema.org/industry"
          }
        },
        "@id": "https://w3id.org/traceability#CTPAT"
      },
      "CTPATCertificate": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CTPATCertificate"
      },
      "CTPATEIPApplication": {
        "@context": {
          "applicant": {
            "@id": "https://w3id.org/traceability#applicant"
          },
          "applicantType": {
            "@id": "https://w3id.org/traceability#applicantType"
          }
        },
        "@id": "https://w3id.org/traceability#CTPAT"
      },
      "CTPATEIPApplicationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CTPATEIPApplicationCredential"
      },
      "CTPATEIPFulfillmentCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CTPATEIPFulfillmentCredential"
      },
      "CTPATEIPMarketplaceCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CTPATEIPMarketplaceCredential"
      },
      "CTPATEIPSellerCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CTPATEIPSellerCredential"
      },
      "CargoItem": {
        "@context": {
          "cargoLineItems": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/cargoLineItem"
          },
          "carrierBookingReference": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierAssignedId"
          },
          "numberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "packageCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageTypeCode"
          },
          "volume": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossVolumeMeasure"
          },
          "volumeUnit": {
            "@id": "https://schema.org/unitCode"
          },
          "weight": {
            "@id": "https://schema.org/weight"
          },
          "weightUnit": {
            "@id": "https://schema.org/unitCode"
          }
        },
        "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/cargoItem"
      },
      "CargoLineItem": {
        "@context": {
          "HSCode": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/HSCode"
          },
          "cargoLineItemID": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/cargoLineItemID"
          },
          "descriptionOfGoods": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/descriptionOfGoods"
          },
          "shippingMarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#physicalShippingMarks"
          }
        },
        "@id": "https://w3id.org/traceability#CargoLineItem"
      },
      "CertificationOfOrigin": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CertificationOfOrigin"
      },
      "ChargeDeclaration": {
        "@context": {
          "dueAgent": {
            "@id": "https://schema.org/price"
          },
          "dueCarrier": {
            "@id": "https://schema.org/price"
          },
          "tax": {
            "@id": "https://schema.org/price"
          },
          "total": {
            "@id": "https://schema.org/totalPrice"
          },
          "valuationCharge": {
            "@id": "https://schema.org/price"
          },
          "weightCharge": {
            "@id": "https://schema.org/price"
          }
        },
        "@id": "https://w3id.org/traceability#ChargeDeclaration"
      },
      "ChemicalProperty": {
        "@context": {
          "description": {
            "@id": "https://schema.org/description"
          },
          "formula": {
            "@id": "https://purl.obolibrary.org/obo/chebi/formula"
          },
          "identifier": {
            "@id": "https://schema.org/identifier"
          },
          "inchi": {
            "@id": "https://purl.obolibrary.org/obo/chebi/inchi"
          },
          "inchikey": {
            "@id": "https://purl.obolibrary.org/obo/chebi/inchikey"
          },
          "name": {
            "@id": "https://schema.org/name"
          }
        },
        "@id": "https://w3id.org/traceability#ChemicalProperty"
      },
      "CommercialInvoiceCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CommercialInvoiceCredential"
      },
      "CommissionEvent": {
        "@context": {
          "organization": {
            "@id": "https://w3id.org/traceability#Organization"
          },
          "place": {
            "@id": "https://schema.org/Place"
          },
          "products": {
            "@id": "https://w3c-ccg.github.io/hashlink/#hl-url-params"
          }
        },
        "@id": "https://w3id.org/traceability#CommissionEvent"
      },
      "Commodity": {
        "@context": {
          "commodityCode": {
            "@id": "https://w3id.org/traceability#commodityCode"
          },
          "commodityCodeType": {
            "@id": "https://w3id.org/traceability#commodityCodeType"
          },
          "description": {
            "@id": "https://schema.org/description"
          }
        },
        "@id": "https://w3id.org/traceability#Commodity"
      },
      "ConsignmentItem": {
        "@context": {
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "countryOfOrigin": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "descriptionOfPackagesAndGoods": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#natureIdentificationCargo"
          },
          "grossVolume": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossVolumeMeasure"
          },
          "grossWeight": {
            "@id": "https://schema.org/weight"
          },
          "manufacturer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manufacturerParty"
          },
          "marksAndNumbers": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#ShippingMarks"
          },
          "netWeight": {
            "@id": "https://schema.org/weight"
          },
          "packageQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#ConsignmentItem"
      },
      "ConsignmentRatingDetail": {
        "@context": {
          "chargeableWeight": {
            "@id": "https://schema.org/weight"
          },
          "commodityItemNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#discountIndicator"
          },
          "grossWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "grossWeightUnit": {
            "@id": "https://schema.org/unitCode"
          },
          "natureAndVolumeOfGoods": {
            "@id": "https://schema.org/description"
          },
          "numberOfPieces": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "rateCharge": {
            "@id": "https://schema.org/price"
          },
          "rateClass": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#freightChargeTariffClassCode"
          },
          "total": {
            "@id": "https://schema.org/totalPrice"
          }
        },
        "@id": "https://w3id.org/traceability#ConsignmentRatingDetail"
      },
      "ContactPoint": {
        "@context": {
          "email": {
            "@id": "https://schema.org/email"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "phoneNumber": {
            "@id": "https://schema.org/telephone"
          },
          "place": {
            "@id": "https://w3id.org/traceability#place"
          }
        },
        "@id": "https://schema.org/ContactPoint"
      },
      "CrudeOilProduct": {
        "@context": {
          "HSCode": {
            "@id": "https://schema.org/identifier"
          },
          "UWI": {
            "@id": "https://schema.org/identifier"
          },
          "facility": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "observation": {
            "@id": "https://w3id.org/traceability#observation"
          },
          "product": {
            "@id": "https://www.gs1.org/voc/Product"
          },
          "productionDate": {
            "@id": "https://schema.org/DateTime"
          }
        },
        "@id": "https://w3id.org/traceability#CrudeOilProduct"
      },
      "CrudeOilProductCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#CrudeOilProductCredential"
      },
      "Customer": {
        "@context": {
          "address": {
            "@id": "https://schema.org/PostalAddress"
          },
          "email": {
            "@id": "https://schema.org/email"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "telephone": {
            "@id": "https://schema.org/telephone"
          }
        },
        "@id": "https://w3id.org/traceability#Customer"
      },
      "DCSAShippingInstruction": {
        "@context": {
          "cargoItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "carrierBookingReference": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Consignment_identifier_carrier_assigned"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "consigneesFreightForwarder": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#freightForwarderParty"
          },
          "firstNotify": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "invoicePayableAt": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/invoicePayableAt"
          },
          "invoicePayerConsignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "invoicePayerShipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipperParty"
          },
          "otherNotify": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "preCarriageUnderShippersResponsibility": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/preCarriageUnderShippersResponsibility"
          },
          "secondNotify": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "shipmentLocations": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DOCUMENTATION_DOMAIN/1.0.0#/components/schemas/shipmentLocation"
          },
          "shipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "shippersFreightForwarder": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#freightForwarderParty"
          },
          "shippingInstructionID": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Transport_instruction_number"
          },
          "transportDocumentType": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/transportDocumentType"
          },
          "utilizedTransportEquipments": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#utilizedTransportEquipment"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Instructions"
      },
      "DCSAShippingInstructionCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#DCSAShippingInstructionCredential"
      },
      "DCSATransportDocument": {
        "@context": {
          "cargoMovementTypeAtDestination": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/cargoMovementTypeAtDestination"
          },
          "cargoMovementTypeAtOrigin": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/cargoMovementTypeAtOrigin"
          },
          "charges": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/charges"
          },
          "clauses": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/clauses"
          },
          "declaredValueCurrency": {
            "@id": "https://schema.org/currency"
          },
          "issueDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueDateTime"
          },
          "issuerCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Standard_Carrier_Alpha_Code_(SCAC)_number"
          },
          "issuerCodeListProvider": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/issuerCodeListProvider"
          },
          "placeOfIssue": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueLocation"
          },
          "receiptDeliveryTypeAtDestination": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/receiptDeliveryTypeAtDestination"
          },
          "receiptDeliveryTypeAtOrigin": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/receiptDeliveryTypeAtOrigin"
          },
          "receivedForShipmentDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#availabilityDueDateTime"
          },
          "serviceContractReference": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/serviceContractReference"
          },
          "shippedOnBoardDate": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.2#/components/schemas/shippedOnBoardDate"
          },
          "shippingInstruction": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/shippingInstruction"
          },
          "termsAndConditions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#termsAndConditionsDescription"
          },
          "transportDocumentReference": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "transports": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/transports"
          }
        },
        "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/transportDocument"
      },
      "DCSATransportDocumentCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#DCSATransportDocumentCredential"
      },
      "DeMinimisShipment": {
        "@context": {
          "buyer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerParty"
          },
          "enhancedProductDescription": {
            "@id": "https://w3id.org/traceability#enhancedProductDescription"
          },
          "finalDeliverTo": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipToParty"
          },
          "houseBillOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#House_bill_of_lading_number"
          },
          "knownCarrierCustomerFlag": {
            "@id": "https://w3id.org/traceability#knownCarrierCustomerFlag"
          },
          "knownMarketplaceSellerFlag": {
            "@id": "https://w3id.org/traceability#knownMarketplaceSellerFlag"
          },
          "listedPriceOnMarketplace": {
            "@id": "https://schema.org/price"
          },
          "marketplaceSellerAccountNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Account_number"
          },
          "masterBillOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "modeOfTransportation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mode"
          },
          "originatorCode": {
            "@id": "https://w3id.org/traceability#originatorCode"
          },
          "participantFilerType": {
            "@id": "https://w3id.org/traceability#participantFilerType"
          },
          "productPicture": {
            "@id": "https://schema.org/image"
          },
          "seller": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sellerParty"
          },
          "shipmentInitiator": {
            "@id": "https://w3id.org/traceability#shipmentInitiator"
          },
          "shipmentSecurityScan": {
            "@id": "https://w3id.org/traceability#shipmentSecurityScan"
          },
          "shipmentTrackingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipmentIdentificationId"
          }
        },
        "@id": "https://w3id.org/traceability#DeMinimisShipment"
      },
      "DeMinimisShipmentCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#DeMinimisExemptionCertificate"
      },
      "DeliverySchedule": {
        "@context": {
          "batchNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#batchIdentificationId"
          },
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "consignee": {
            "@id": "https://schema.org/Organization"
          },
          "consignor": {
            "@id": "https://schema.org/Organization"
          },
          "deliveryDate": {
            "@id": "https://schema.org/arrivalTime"
          },
          "injectionDate": {
            "@id": "https://schema.org/departureTime"
          },
          "injectionVolume": {
            "@id": "https://schema.org/Quantity"
          },
          "place": {
            "@id": "https://schema.org/Place"
          },
          "scheduledDate": {
            "@id": "https://schema.org/departureTime"
          },
          "scheduledVolume": {
            "@id": "https://schema.org/Quantity"
          },
          "transporter": {
            "@id": "https://schema.org/Organization"
          }
        },
        "@id": "https://w3id.org/traceability#DeliverySchedule"
      },
      "DeliveryStatement": {
        "@context": {
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "deliveredDate": {
            "@id": "https://schema.org/Date"
          },
          "deliveredVolume": {
            "@id": "https://schema.org/MeasuredValue"
          },
          "observation": {
            "@id": "https://w3id.org/traceability#observation"
          }
        },
        "@id": "https://w3id.org/traceability#DeliveryStatement"
      },
      "EDDShape": {
        "@context": {
          "abundance": {
            "@id": "https://schema.org/description"
          },
          "approximateQuantity": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "centroidType": {
            "@id": "https://schema.org/polygon"
          },
          "commonName": {
            "@id": "http://rs.tdwg.org/dwc/terms/vernacularName"
          },
          "coordinateUncertainty": {
            "@id": "http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters"
          },
          "dateEntered": {
            "@id": "http://rs.tdwg.org/dwc/terms/eventDate"
          },
          "dateUncertaintyDays": {
            "@id": "https://schema.org/value"
          },
          "dateUpdated": {
            "@id": "http://rs.tdwg.org/dwc/terms/eventDate"
          },
          "density": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementRemarks"
          },
          "grossAreaAcres": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "habitat": {
            "@id": "http://rs.tdwg.org/dwc/terms/habitat"
          },
          "identificationCredibility": {
            "@id": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
          },
          "incidence": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "infestedAreaAcres": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "location": {
            "@id": "https://schema.org/location"
          },
          "managementStatus": {
            "@id": "https://schema.org/status"
          },
          "mapResources": {
            "@id": "https://w3id.org/traceability#MapResource"
          },
          "meta": {
            "@id": "https://w3id.org/traceability#EDDShapeMeta"
          },
          "naDatum": {
            "@id": "http://rs.tdwg.org/dwc/terms/geodeticDatum"
          },
          "observationDate": {
            "@id": "http://rs.tdwg.org/dwc/terms/eventDate"
          },
          "occurrenceStatus": {
            "@id": "https://schema.org/value"
          },
          "percentCover": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "persistentId": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceID"
          },
          "quantity": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "quantityUnits": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantityType"
          },
          "recordBasis": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
          },
          "reporter": {
            "@id": "https://schema.org/name"
          },
          "reviewer": {
            "@id": "http://rs.tdwg.org/dwc/terms/identifiedBy"
          },
          "scientificName": {
            "@id": "http://rs.tdwg.org/dwc/terms/scientificName"
          },
          "severity": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "siteName": {
            "@id": "http://rs.tdwg.org/dwc/terms/locationID"
          },
          "status": {
            "@id": "https://schema.org/description"
          },
          "subjectNativity": {
            "@id": "http://rs.tdwg.org/dwc/terms/establishmentMeans"
          },
          "surveyor": {
            "@id": "http://rs.tdwg.org/dwc/terms/recordedBy"
          },
          "uuid": {
            "@id": "http://rs.tdwg.org/dwc/terms/dateIdentified"
          },
          "verificationMethod": {
            "@id": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
          },
          "verified": {
            "@id": "http://rs.tdwg.org/dwc/terms/identificationVerificationStatus"
          },
          "visitType": {
            "@id": "https://schema.org/description"
          }
        },
        "@id": "https://w3id.org/traceability#EDDShape"
      },
      "EDDShapeMeta": {
        "@context": {
          "collectionTimeMinutes": {
            "@id": "https://schema.org/activityDuration"
          },
          "comments": {
            "@id": "http://rs.tdwg.org/dwc/terms/eventRemarks"
          },
          "dataCollectionMethod": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementMethod"
          },
          "hostDamage": {
            "@id": "https://schema.org/description"
          },
          "hostName": {
            "@id": "http://rs.tdwg.org/dwc/terms/vernacularName"
          },
          "hostPhenology": {
            "@id": "http://rs.tdwg.org/dwc/terms/lifeStage"
          },
          "hostScientificName": {
            "@id": "http://rs.tdwg.org/dwc/terms/scientificName"
          },
          "largestOrganismSampled": {
            "@id": "https://schema.org/size"
          },
          "lifeStatus": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          },
          "localOwnership": {
            "@id": "http://rs.tdwg.org/dwc/terms/locality"
          },
          "locality": {
            "@id": "http://rs.tdwg.org/dwc/terms/locationRemarks"
          },
          "method": {
            "@id": "http://rs.tdwg.org/dwc/terms/locationRemarks"
          },
          "museum": {
            "@id": "https://schema.org/name"
          },
          "museumRecord": {
            "@id": "http://rs.tdwg.org/dwc/terms/catalogNumber"
          },
          "numberCollected": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementRemarks"
          },
          "numberTraps": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingEffort"
          },
          "observationId": {
            "@id": "http://rs.tdwg.org/dwc/terms/identifiedBy"
          },
          "originalRecordId": {
            "@id": "http://rs.tdwg.org/dwc/terms/recordNumber"
          },
          "originalReportedName": {
            "@id": "http://rs.tdwg.org/dwc/terms/verbatimIdentification"
          },
          "phenology": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismRemarks"
          },
          "plantsTreated": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "populationStatus": {
            "@id": "http://rs.tdwg.org/dwc/terms/degreeOfEstablishment"
          },
          "publicReviewerComments": {
            "@id": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
          },
          "recordOwner": {
            "@id": "https://schema.org/name"
          },
          "recordSourceType": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementRemarks"
          },
          "reference": {
            "@id": "http://rs.tdwg.org/dwc/terms/associatedReferences"
          },
          "sex": {
            "@id": "http://rs.tdwg.org/dwc/terms/sex"
          },
          "shapeType": {
            "@id": "https://schema.org/description"
          },
          "smallestOrganismSampled": {
            "@id": "https://schema.org/size"
          },
          "substrate": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          },
          "targetCount": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "targetName": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismName"
          },
          "targetRange": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "trapType": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
          },
          "treatmentArea": {
            "@id": "https://schema.org/value"
          },
          "treatmentComments": {
            "@id": "http://rs.tdwg.org/dwc/terms/eventRemarks"
          },
          "voucher": {
            "@id": "http://rs.tdwg.org/dwc/terms/disposition"
          },
          "waterBodyName": {
            "@id": "http://rs.tdwg.org/dwc/terms/waterBody"
          },
          "waterBodyType": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          }
        },
        "@id": "https://w3id.org/traceability#EDDShapeMeta"
      },
      "Entity": {
        "@context": {
          "address": {
            "@id": "https://schema.org/PostalAddress"
          },
          "email": {
            "@id": "https://schema.org/email"
          },
          "entityType": {
            "@id": "https://schema.org/additionalType"
          },
          "faxNumber": {
            "@id": "https://schema.org/faxNumber"
          },
          "legalName": {
            "@id": "https://schema.org/legalName"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "phoneNumber": {
            "@id": "https://schema.org/telephone"
          },
          "taxId": {
            "@id": "https://schema.org/taxID"
          },
          "url": {
            "@id": "https://schema.org/url"
          }
        },
        "@id": "https://w3id.org/traceability#Entity"
      },
      "EntrySummary": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bondType": {
            "@id": "https://w3id.org/traceability#bondType"
          },
          "consigneeNumber": {
            "@id": "https://schema.org/identifier"
          },
          "countryOfOrigin": {
            "@id": "https://w3id.org/traceability#countryOfOrigin"
          },
          "declarationOfImporter": {
            "@id": "https://w3id.org/traceability#declarationOfImporter"
          },
          "descriptionOfMerchandise": {
            "@id": "https://w3id.org/traceability#descriptionOfMerchandise"
          },
          "duty": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "entryDate": {
            "@id": "https://schema.org/Date"
          },
          "entryNumber": {
            "@id": "https://schema.org/identifier"
          },
          "entryType": {
            "@id": "https://w3id.org/traceability#entryType"
          },
          "exportDate": {
            "@id": "https://schema.org/Date"
          },
          "exportingCountry": {
            "@id": "https://schema.org/addressCountry"
          },
          "immediateTransportationDate": {
            "@id": "https://schema.org/Date"
          },
          "immediateTransportationNumber": {
            "@id": "https://schema.org/identifier"
          },
          "importDate": {
            "@id": "https://schema.org/Date"
          },
          "importerNumber": {
            "@id": "https://schema.org/identifier"
          },
          "importerOfRecord": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#importerParty"
          },
          "importingCarrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "locationOfGoods": {
            "@id": "https://schema.org/Place"
          },
          "manufacturerId": {
            "@id": "https://schema.org/identifier"
          },
          "missingDocuments": {
            "@id": "https://w3id.org/traceability#missingDocuments"
          },
          "other": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "otherFeeSummary": {
            "@id": "https://w3id.org/traceability#otherFeeSummary"
          },
          "portCode": {
            "@id": "https://schema.org/Place"
          },
          "portOfLoading": {
            "@id": "https://schema.org/Place"
          },
          "portOfUnlading": {
            "@id": "https://schema.org/Place"
          },
          "referenceNumber": {
            "@id": "https://w3id.org/traceability#referenceNumber"
          },
          "summaryDate": {
            "@id": "https://schema.org/Date"
          },
          "suretyCode": {
            "@id": "https://w3id.org/traceability#suretyCode"
          },
          "tax": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "total": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "totalEnteredValue": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "transportMode": {
            "@id": "https://w3id.org/traceability#transportMode"
          },
          "ultimateConsignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipToParty"
          }
        },
        "@id": "https://w3id.org/traceability#EntrySummary"
      },
      "EntrySummaryLineItem": {
        "@context": {
          "adCvdNumber": {
            "@id": "https://w3id.org/traceability#adCvdNumber"
          },
          "adCvdRate": {
            "@id": "https://w3id.org/traceability#adCvdRate"
          },
          "agriculturalLicenseNumber": {
            "@id": "https://w3id.org/traceability#agriculturalLicenseNumber"
          },
          "categoryNumber": {
            "@id": "https://w3id.org/traceability#categoryNumber"
          },
          "charges": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "dutyAndIRTax": {
            "@id": "https://w3id.org/traceability#dutyAndIRTax"
          },
          "enteredValue": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "grossWeight": {
            "@id": "https://schema.org/weight"
          },
          "htsRate": {
            "@id": "https://w3id.org/traceability#htsRate"
          },
          "ircRate": {
            "@id": "https://w3id.org/traceability#ircRate"
          },
          "manifestQuantity": {
            "@id": "https://w3id.org/traceability#manifestQuantity"
          },
          "netQuantity": {
            "@id": "https://schema.org/Quantity"
          },
          "otherFees": {
            "@id": "https://w3id.org/traceability#otherFees"
          },
          "relationship": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "visaNumber": {
            "@id": "https://w3id.org/traceability#visaNumber"
          }
        },
        "@id": "https://w3id.org/traceability#EntrySummaryLineItem"
      },
      "Event": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#EventCredential"
      },
      "ExternalResource": {
        "@context": {
          "hash": {
            "@id": "https://schema.org/sha256"
          },
          "uri": {
            "@id": "https://schema.org/contentUrl"
          }
        },
        "@id": "https://w3id.org/traceability#ExternalResource"
      },
      "FSMAAbstractKDE": {
        "@context": {
          "name": {
            "@id": "https://schema.org/propertyID"
          },
          "value": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
      },
      "FSMACreatingCTE": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "dateCompleted": {
            "@id": "https://schema.org/endDate"
          },
          "food": {
            "@id": "https://w3id.org/traceability#FSMAProduct"
          },
          "location": {
            "@id": "https://schema.org/location"
          }
        },
        "@id": "https://w3id.org/traceability#FSMACreatingCTE"
      },
      "FSMACreatingCTECredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FSMACreatingCTECredential"
      },
      "FSMAFirstReceiverData": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "coolingDate": {
            "@id": "https://schema.org/endDate"
          },
          "coolingLocation": {
            "@id": "https://schema.org/location"
          },
          "harvestDate": {
            "@id": "https://schema.org/endDate"
          },
          "originatorLocation": {
            "@id": "https://schema.org/location"
          },
          "packingDate": {
            "@id": "https://schema.org/endDate"
          },
          "packingLocation": {
            "@id": "https://schema.org/location"
          },
          "traceabilityLot": {
            "@id": "https://w3id.org/traceability#FSMATraceabilityLot"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAFirstReceiverData"
      },
      "FSMAFirstReceiverDataCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FSMAFirstReceiverDataCredential"
      },
      "FSMAGrowingCTE": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "growingAreaCoordinates": {
            "@id": "https://w3id.org/traceability#GeoCoordinates"
          },
          "traceabilityLot": {
            "@id": "https://w3id.org/traceability#FSMATraceabilityLot"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAGrowingCTE"
      },
      "FSMAGrowingCTECredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FSMAGrowingCTECredential"
      },
      "FSMAProduct": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "quantity": {
            "@id": "https://schema.org/value"
          },
          "traceabilityLot": {
            "@id": "https://w3id.org/traceability#FSMATraceabilityLot"
          },
          "unit": {
            "@id": "https://schema.org/unitText"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAProduct"
      },
      "FSMAReceivingCTE": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "dateReceived": {
            "@id": "https://schema.org/endDate"
          },
          "shipment": {
            "@id": "https://w3id.org/traceability#FSMAShipment"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAReceivingCTE"
      },
      "FSMAReceivingCTECredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FSMAReceivingCTECredential"
      },
      "FSMAShipment": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "from": {
            "@id": "https://schema.org/fromLocation"
          },
          "product": {
            "@id": "https://w3id.org/traceability#FSMAProduct"
          },
          "to": {
            "@id": "https://schema.org/toLocation"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAShipment"
      },
      "FSMAShippingCTE": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "dateShipped": {
            "@id": "https://schema.org/startDate"
          },
          "shipment": {
            "@id": "https://w3id.org/traceability#FSMAShipment"
          }
        },
        "@id": "https://w3id.org/traceability#FSMAShippingCTE"
      },
      "FSMAShippingCTECredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FSMAShippingCTECredential"
      },
      "FSMATraceabilityLot": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "lotCode": {
            "@id": "https://www.gs1.org/voc/hasBatchLotNumber"
          },
          "lotCodeAssignmentMethod": {
            "@id": "https://schema.org/description"
          },
          "lotCodeGeneratorLocation": {
            "@id": "https://schema.org/location"
          },
          "lotCodeGeneratorPOC": {
            "@id": "https://schema.org/contactPoint"
          },
          "lotType": {
            "@id": "https://schema.org/additionalType"
          }
        },
        "@id": "https://w3id.org/traceability#FSMATraceabilityLot"
      },
      "FSMATransformingCTE": {
        "@context": {
          "additionalData": {
            "@id": "https://w3id.org/traceability#FSMAAbstractKDE"
          },
          "dateCompleted": {
            "@id": "https://schema.org/endDate"
          },
          "foodProduced": {
            "@id": "https://w3id.org/traceability#FSMAProduct"
          },
          "foodUsed": {
            "@id": "https://w3id.org/traceability#FSMAProduct"
          },
          "locationTransformed": {
            "@id": "https://schema.org/location"
          }
        },
        "@id": "https://w3id.org/traceability#FSMATransformingCTE"
      },
      "FSMATransformingCTECredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FSMATransformingCTECredential"
      },
      "FoodDefenseDeficiency": {
        "@context": {
          "dateCorrected": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#occurrenceDateTime"
          },
          "description": {
            "@id": "https://schema.org/description"
          },
          "number": {
            "@id": "https://schema.org/identifier"
          },
          "proposedCorrectionDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#occurrenceDateTime"
          }
        },
        "@id": "https://w3id.org/traceability#FoodDefenseDeficiency"
      },
      "FoodDefenseInspection": {
        "@context": {
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "deficiencies": {
            "@id": "https://w3id.org/traceability#FoodDefenseDeficiency"
          },
          "questions": {
            "@id": "https://w3id.org/traceability#FoodDefenseQuestion"
          }
        },
        "@id": "https://w3id.org/traceability#FoodDefenseInspection"
      },
      "FoodDefenseInspectionCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FoodDefenseInspectionCredential"
      },
      "FoodDefenseQuestion": {
        "@context": {
          "facility": {
            "@id": "https://schema.org/location"
          },
          "number": {
            "@id": "https://schema.org/identifier"
          },
          "rating": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#assertion"
          },
          "response": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#assertion"
          }
        },
        "@id": "https://w3id.org/traceability#FoodDefenseQuestion"
      },
      "FoodGradeInspection": {
        "@context": {
          "carrierTypeName": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#utilizedTransportEquipment"
          },
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "doorsOpen": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "estimatedCharges": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#applicableServiceCharge"
          },
          "generalRemarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "loadingStatus": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "lots": {
            "@id": "https://w3id.org/traceability#FoodGradeInspectionLot"
          },
          "refrigerationUnitOn": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          }
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspection"
      },
      "FoodGradeInspectionCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspectionCredential"
      },
      "FoodGradeInspectionDefect": {
        "@context": {
          "averageDefects": {
            "@id": "https://qudt.org/vocab/unit/PERCENT"
          },
          "damage": {
            "@id": "https://qudt.org/vocab/unit/PERCENT"
          },
          "offsizeDefect": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#damageRemarks"
          },
          "seriousDamage": {
            "@id": "https://qudt.org/vocab/unit/PERCENT"
          },
          "verySeriousDamage": {
            "@id": "https://qudt.org/vocab/unit/PERCENT"
          }
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspectionDefect"
      },
      "FoodGradeInspectionLot": {
        "@context": {
          "agricultureProduct": {
            "@id": "https://w3id.org/traceability#AgricultureProduct"
          },
          "brandMarkings": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#brandName"
          },
          "countInspected": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remark"
          },
          "defects": {
            "@id": "https://w3id.org/traceability#FoodGradeInspectionDefect"
          },
          "grade": {
            "@id": "https://w3id.org/traceability#FoodGradeInspectionResult"
          },
          "lotIdentifier": {
            "@id": "https://www.gs1.org/voc/hasBatchLotNumber"
          },
          "maxTemperature": {
            "@id": "https://schema.org/measuredValue"
          },
          "minTemperature": {
            "@id": "https://schema.org/measuredValue"
          },
          "numberContainers": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "remarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remark"
          },
          "samples": {
            "@id": "https://w3id.org/traceability#FoodGradeInspectionSample"
          }
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspectionLot"
      },
      "FoodGradeInspectionResult": {
        "@context": {
          "details": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#additionalInformationNote"
          },
          "gradeInspected": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#standard"
          },
          "requirementsMet": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#assertion"
          }
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspectionResult"
      },
      "FoodGradeInspectionSample": {
        "@context": {
          "sampleProperties": {
            "@id": "https://w3id.org/traceability#FoodGradeInspectionSampleProperty"
          },
          "sampleSizeUnits": {
            "@id": "https://schema.org/unitText"
          },
          "sampleSizeValue": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspectionSample"
      },
      "FoodGradeInspectionSampleProperty": {
        "@context": {
          "propertyName": {
            "@id": "https://schema.org/name"
          },
          "propertyValue": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://w3id.org/traceability#FoodGradeInspectionSampleProperty"
      },
      "ForeignChargeDeclaration": {
        "@context": {
          "foreignCharges": {
            "@id": "https://schema.org/price"
          },
          "foreignChargesCurrency": {
            "@id": "https://schema.org/currency"
          },
          "foreignCurrencyConvertionRate": {
            "@id": "https://schema.org/currentExchangeRate"
          }
        },
        "@id": "https://w3id.org/traceability#ForeignChargeDeclaration"
      },
      "FreightManifest": {
        "@context": {
          "billsOfLading": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manifestRelatedDocument"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "carrierCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Standard_Carrier_Alpha_Code_(SCAC)_number"
          },
          "transportMeans": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportMeans"
          },
          "transportMeansId": {
            "@id": "https://schema.org/identifier"
          },
          "voyage": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TransportMovement"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manifestRelatedDocument"
      },
      "FreightManifestCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FreightManifestCredential"
      },
      "FulfillmentRegistrationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#FulfillmentRegistrationCredential"
      },
      "GAPCorrectiveActionReport": {
        "@context": {
          "affirmingRepresentative": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "correctiveAction": {
            "@id": "https://schema.org/potentialAction"
          },
          "nonconformityDescription": {
            "@id": "https://schema.org/description"
          },
          "notifiedCompanyStaff": {
            "@id": "https://schema.org/actionStatus"
          }
        },
        "@id": "https://w3id.org/traceability#GAPCorrectiveActionReport"
      },
      "GAPInspection": {
        "@context": {
          "GAPPlus": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#documentTypeCode"
          },
          "additionalComments": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "commoditiesCovered": {
            "@id": "https://schema.org/ItemList"
          },
          "commoditiesProduced": {
            "@id": "https://schema.org/ItemList"
          },
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "dateReviewed": {
            "@id": "https://www.gs1.org/voc/certificationAuditDate"
          },
          "distributeTo": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "fieldOpsHarvestingScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "harvestCompany": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "logoUseScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "meetsCriteria": {
            "@id": "https://www.gs1.org/voc/certificationStatus"
          },
          "operationDescription": {
            "@id": "https://schema.org/description"
          },
          "otherContractors": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "personsInterviewed": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "postHarvestOpsScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "requestedBy": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "requirementResults": {
            "@id": "https://w3id.org/traceability#GAPRequirementResult"
          },
          "reviewingOfficial": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "subjectToRule": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#regulationConformityId"
          },
          "tomatoGreenhouseScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "tomatoPackingDistributionScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "tomatoPackinghouseScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "tomatoProdHarvestingScope": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "totalArea": {
            "@id": "https://www.gs1.org/voc/grossArea"
          },
          "usesLogo": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#assertion"
          }
        },
        "@id": "https://w3id.org/traceability#GAPInspection"
      },
      "GAPInspectionCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#GAPInspectionCredential"
      },
      "GAPLocationCertification": {
        "@context": {
          "gapInspection": {
            "@id": "https://www.gs1.org/voc/certification"
          },
          "isCertified": {
            "@id": "https://www.gs1.org/voc/certificationStatus"
          },
          "location": {
            "@id": "https://www.gs1.org/voc/certificationSubject"
          }
        },
        "@id": "https://w3id.org/traceability#GAPLocationCertification"
      },
      "GAPRequirementResult": {
        "@context": {
          "auditorComments": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "correctiveActionReport": {
            "@id": "https://w3id.org/traceability#GAPCorrectiveActionReport"
          },
          "requirementNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#standard"
          },
          "resultCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#assertionCode"
          }
        },
        "@id": "https://w3id.org/traceability#GAPRequirementResult"
      },
      "GS18PrefixLicenceCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#GS18PrefixLicenceCredential"
      },
      "GS1CompanyPrefixLicenceCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#GS1CompanyPrefixLicenceCredential"
      },
      "GS1KeyCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#GS1KeyCredential"
      },
      "GS1PrefixLicenceCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#GS1PrefixLicenceCredential"
      },
      "GeoCoordinates": {
        "@context": {
          "latitude": {
            "@id": "https://schema.org/latitude"
          },
          "longitude": {
            "@id": "https://schema.org/longitude"
          }
        },
        "@id": "https://schema.org/GeoCoordinates"
      },
      "HouseBillOfLading": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bookingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierAssignedId"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "declaredValue": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#declaredValueForCarriageAmount"
          },
          "freightAndCharges": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#applicableServiceCharge"
          },
          "includedConsignmentItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "mainCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mainCarriageTransportMovement"
          },
          "notifyParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "onCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#onCarriageTransportMovement"
          },
          "placeOfDelivery": {
            "@id": "https://schema.org/Place"
          },
          "placeOfReceipt": {
            "@id": "https://schema.org/Place"
          },
          "portOfDischarge": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#unloadingLocation"
          },
          "portOfLoading": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transshipmentLocation"
          },
          "preCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#preCarriageTransportMovement"
          },
          "shipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "shippersReferences": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Consignment_identifier_freight_forwarder_assigned"
          },
          "termsAndConditions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#termsAndConditionsDescription"
          },
          "totalNumberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "transportEquipmentQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportEquipmentQuantity"
          }
        },
        "@id": "https://w3id.org/traceability#HouseBillOfLading"
      },
      "HouseBillOfLadingCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#HouseBillOfLadingCredential"
      },
      "IATAAirWaybill": {
        "@context": {
          "accountingInformation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#typeCode"
          },
          "agentAccountNumber": {
            "@id": "https://schema.org/accountId"
          },
          "agentIATACode": {
            "@id": "https://onerecord.iata.org/cargo/Company#iataCargoAgentCode"
          },
          "airWaybillNumber": {
            "@id": "https://schema.org/orderNumber"
          },
          "airlineCodeNumber": {
            "@id": "https://onerecord.iata.org/cargo/Company#airlineCode"
          },
          "airportOfDeparture": {
            "@id": "https://onerecord.iata.org/cargo/Location#code"
          },
          "amountOfInsurance": {
            "@id": "https://schema.org/value"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "chargeCodes": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#chargeCategoryCode"
          },
          "collectChargeDeclaration": {
            "@id": "https://w3id.org/traceability#CollectChargeDeclaration"
          },
          "collectTotal": {
            "@id": "https://schema.org/totalPrice"
          },
          "conditionsOfContract": {
            "@id": "https://schema.org/termsOfService"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "consigneesAccountNumber": {
            "@id": "https://schema.org/accountId"
          },
          "consignmentRatingDetails": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "currency": {
            "@id": "https://schema.org/currency"
          },
          "declaredValueForCarriage": {
            "@id": "https://schema.org/value"
          },
          "declaredValueForCustoms": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#customsValueSpecifiedAmount"
          },
          "destinationAirport": {
            "@id": "https://onerecord.iata.org/cargo/Company#airlineCode"
          },
          "destinationCollectChargeDeclaration": {
            "@id": "https://w3id.org/traceability#DestinationCollectChargeDeclaration"
          },
          "executedAt": {
            "@id": "https://schema.org/Place"
          },
          "executedOn": {
            "@id": "https://w3id.org/traceability#executionTime"
          },
          "handlingInformation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#handlingInstructions"
          },
          "insuranceClauses": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#contractualClause"
          },
          "issuingCarrierAgent": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierAgentParty"
          },
          "otherCharges": {
            "@id": "https://schema.org/price"
          },
          "otherChargesType": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#chargeCategoryCode"
          },
          "prepaidChargeDeclaration": {
            "@id": "https://w3id.org/traceability#PrepaidChargeDeclaration"
          },
          "prepaidTotal": {
            "@id": "https://schema.org/totalPrice"
          },
          "requestedDate": {
            "@id": "https://w3id.org/traceability#requestDate"
          },
          "requestedFlight": {
            "@id": "https://schema.org/Flight"
          },
          "requestedRouting": {
            "@id": "https://schema.org/Trip"
          },
          "serialNumber": {
            "@id": "https://schema.org/serialNumber"
          },
          "shipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "shippersAccountNumber": {
            "@id": "https://schema.org/accountId"
          },
          "shippersCertificationBox": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Certification"
          },
          "specialCustomsInformation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Declaration"
          },
          "totalCharge": {
            "@id": "https://schema.org/totalPrice"
          },
          "totalGrossWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "totalNumberOfPieces": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "waybillType": {
            "@id": "https://schema.org/DigitalDocument"
          },
          "weightValuationChargesType": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#chargeCategoryCode"
          }
        },
        "@id": "https://w3id.org/traceability#IATAAirWaybill"
      },
      "IATAAirWaybillCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#IATAAirWaybillCredential"
      },
      "ImmediateDelivery": {
        "@context": {
          "arrivalDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualArrivalRelatedDateTime"
          },
          "assignedIdentifier": {
            "@id": "https://schema.org/identifier"
          },
          "assignedIdentifierType": {
            "@id": "https://w3id.org/traceability#assignedIdentifierType"
          },
          "bolNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bolType": {
            "@id": "https://w3id.org/traceability#bolType"
          },
          "bondType": {
            "@id": "https://w3id.org/traceability#bondType"
          },
          "bondValue": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "centralizedExaminationSite": {
            "@id": "https://w3id.org/traceability#centralizedExaminationSite"
          },
          "conveyanceName": {
            "@id": "https://w3id.org/traceability#conveyanceName"
          },
          "conveyanceNameOrFreeTradeZoneID": {
            "@id": "https://w3id.org/traceability#conveyanceNameOrFreeTradeZoneID"
          },
          "entryNumber": {
            "@id": "https://schema.org/identifier"
          },
          "entryType": {
            "@id": "https://w3id.org/traceability#entryType"
          },
          "entryValue": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "generalOrderNumber": {
            "@id": "https://w3id.org/traceability#generalOrderNumber"
          },
          "headerParties": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Party"
          },
          "importer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#importerParty"
          },
          "inBondNumber": {
            "@id": "https://w3id.org/traceability#inBondNumber"
          },
          "lineItems": {
            "@id": "https://w3id.org/traceability#lineItems"
          },
          "locationOfGoods": {
            "@id": "https://schema.org/Place"
          },
          "nonAMS": {
            "@id": "https://w3id.org/traceability#nonAMS"
          },
          "originatingWarehouseEntryNumber": {
            "@id": "https://w3id.org/traceability#originatingWarehouseEntryNumber"
          },
          "portOfEntry": {
            "@id": "https://schema.org/Place"
          },
          "portOfUnlading": {
            "@id": "https://schema.org/Place"
          },
          "quantity": {
            "@id": "https://w3id.org/traceability#quantity"
          },
          "referenceIDCode": {
            "@id": "https://w3id.org/traceability#referenceIDCode"
          },
          "referenceIDNumber": {
            "@id": "https://w3id.org/traceability#referenceIDNumber"
          },
          "scac": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Standard_Carrier_Alpha_Code_(SCAC)_number"
          },
          "splitBill": {
            "@id": "https://w3id.org/traceability#splitBill"
          },
          "suretyCode": {
            "@id": "https://w3id.org/traceability#suretyCode"
          },
          "transportMode": {
            "@id": "https://w3id.org/traceability#transportMode"
          },
          "voyageFlightTrip": {
            "@id": "https://w3id.org/traceability#voyageFlightTrip"
          }
        },
        "@id": "https://w3id.org/traceability#ImmediateDelivery"
      },
      "ImmediateDeliveryEntity": {
        "@context": {
          "assignedIdentifier": {
            "@id": "https://schema.org/identifier"
          },
          "assignedIdentifierType": {
            "@id": "https://w3id.org/traceability#assignedIdentifierType"
          },
          "buyer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerParty"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "importer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manufacturerParty"
          },
          "seller": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sellerParty"
          }
        },
        "@id": "https://w3id.org/traceability#ImmediateDeliveryEntity"
      },
      "ImmediateDeliveryLineItem": {
        "@context": {
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "countryOfOrigin": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "freeTradeZoneFilingDate": {
            "@id": "https://schema.org/Date"
          },
          "freeTradeZoneStatus": {
            "@id": "https://w3id.org/traceability#freeTradeZoneStatus"
          },
          "itemCount": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#despatchedQuantity"
          },
          "itemParty": {
            "@id": "https://w3id.org/traceability#itemParty"
          },
          "productDescription": {
            "@id": "https://schema.org/description"
          },
          "value": {
            "@id": "https://schema.org/MonetaryAmount"
          }
        },
        "@id": "https://w3id.org/traceability#ImmediateDeliveryLineItem"
      },
      "ImporterSecurityFiling": {
        "@context": {
          "buyer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerParty"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "consolidator": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consolidatorParty"
          },
          "containerStuffingLocation": {
            "@id": "https://w3id.org/traceability#containerStuffingLocation"
          },
          "filingItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "importer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#importerParty"
          },
          "seller": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sellerParty"
          },
          "shipToParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipToParty"
          }
        },
        "@id": "https://w3id.org/traceability#ImporterSecurityFiling"
      },
      "ImporterSecurityFilingCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#ImporterSecurityFilingCredential"
      },
      "Inbond": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://schema.org/identifier"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "entryId": {
            "@id": "https://schema.org/identifier"
          },
          "expectedDeliveryDate": {
            "@id": "https://schema.org/DateTime"
          },
          "ftzNo": {
            "@id": "https://schema.org/identifier"
          },
          "inBondNumber": {
            "@id": "https://schema.org/identifier"
          },
          "inBondType": {
            "@id": "https://schema.org/identifier"
          },
          "irsNumber": {
            "@id": "https://schema.org/identifier"
          },
          "portOfArrival": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "portOfDestination": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "portOfEntry": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "product": {
            "@id": "https://www.gs1.org/voc/Product"
          },
          "recipient": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "shipment": {
            "@id": "https://schema.org/ParcelDelivery"
          },
          "totalOrderValue": {
            "@id": "https://schema.org/PriceSpecification"
          },
          "valuePerItem": {
            "@id": "https://schema.org/PriceSpecification"
          }
        },
        "@id": "https://w3id.org/traceability#Inbond"
      },
      "InspectionReport": {
        "@context": {
          "comment": {
            "@id": "https://schema.org/comment"
          },
          "inspectors": {
            "@id": "https://schema.org/Person"
          },
          "observation": {
            "@id": "https://schema.org/ItemList"
          },
          "place": {
            "@id": "https://schema.org/Place"
          }
        },
        "@id": "https://w3id.org/traceability#InspectionReport"
      },
      "Inspector": {
        "@context": {
          "person": {
            "@id": "https://schema.org/Person"
          },
          "qualification": {
            "@id": "https://w3id.org/traceability#qualification"
          }
        },
        "@id": "https://w3id.org/traceability#Inspector"
      },
      "Instructions": {
        "@context": {
          "description": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Instructions"
      },
      "IntellectualPropertyRights": {
        "@context": {
          "intellectualPropertyRightsOwner": {
            "@id": "https://w3id.org/traceability#intellectualPropertyRightsOwner"
          },
          "intellectualPropertyRightsProduct": {
            "@id": "https://w3id.org/traceability#intellectualPropertyRightsProduct"
          },
          "intellectualPropertyRightsType": {
            "@id": "https://w3id.org/traceability#intellectualPropertyRightsType"
          }
        },
        "@id": "https://w3id.org/traceability#IntellectualPropertyRights"
      },
      "IntellectualPropertyRightsAffirmation": {
        "@context": {
          "affirmingParty": {
            "@id": "https://w3id.org/traceability#affirmingParty"
          },
          "evidenceDocumentUrl": {
            "@id": "https://schema.org/url"
          },
          "intellectualPropertyRightsType": {
            "@id": "https://w3id.org/traceability#intellectualPropertyRightsType"
          }
        },
        "@id": "https://w3id.org/traceability#IntellectualPropertyRightsAffirmation"
      },
      "IntellectualPropertyRightsCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#IntellectualPropertyRightsCredential"
      },
      "IntentToImport": {
        "@context": {
          "declarationDate": {
            "@id": "https://schema.org/startDate"
          },
          "exporter": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#exporterParty"
          },
          "importer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#importerParty"
          },
          "product": {
            "@id": "https://www.gs1.org/voc/Product"
          }
        },
        "@id": "https://w3id.org/traceability#IntentToImport"
      },
      "IntentToImportCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#IntentToImportCredential"
      },
      "InventoryRegistrationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#InventoryRegistrationCredential"
      },
      "Invoice": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "buyer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerParty"
          },
          "comments": {
            "@id": "https://schema.org/Comment"
          },
          "consignee": {
            "@id": "https://vocabulary.uncefact.org/consigneeParty"
          },
          "customerReferenceNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Customer_reference_number"
          },
          "deductions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#deductionAmount"
          },
          "destinationCountry": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#destinationCountry"
          },
          "discounts": {
            "@id": "https://schema.org/discount"
          },
          "freightCost": {
            "@id": "https://schema.org/DeliveryChargeSpecification"
          },
          "identifier": {
            "@id": "https://schema.org/identifier"
          },
          "insuranceCost": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#insuranceChargeTotalAmount"
          },
          "invoiceDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#invoiceDateTime"
          },
          "invoiceNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#invoiceIssuerReference"
          },
          "itemsShipped": {
            "@id": "https://schema.org/itemShipped"
          },
          "letterOfCreditNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#letterOfCreditDocument"
          },
          "originCountry": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "packageQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "portOfEntry": {
            "@id": "https://schema.org/Place"
          },
          "purchaseDate": {
            "@id": "https://schema.org/paymentDueDate"
          },
          "referencesOrder": {
            "@id": "https://schema.org/referencesOrder"
          },
          "seller": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sellerParty"
          },
          "tax": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#taxTotalAmount"
          },
          "termsOfDelivery": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedDeliveryTerms"
          },
          "termsOfPayment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPaymentTerms"
          },
          "termsOfSettlement": {
            "@id": "https://schema.org/currency"
          },
          "totalPaymentDue": {
            "@id": "https://schema.org/totalPaymentDue"
          },
          "totalWeight": {
            "@id": "https://schema.org/weight"
          }
        },
        "@id": "https://schema.org/Invoice"
      },
      "LEIaddress": {
        "@context": {
          "addressNumberWithinBuilding": {
            "@id": "https://schema.org/value"
          },
          "city": {
            "@id": "https://schema.org/addressLocality"
          },
          "country": {
            "@id": "https://schema.org/addressCountry"
          },
          "language": {
            "@id": "https://schema.org/Language"
          },
          "mailRouting": {
            "@id": "https://schema.org/Trip"
          },
          "postalCode": {
            "@id": "https://schema.org/postalCode"
          },
          "region": {
            "@id": "https://schema.org/addressRegion"
          }
        },
        "@id": "https://w3id.org/traceability#LEIaddress"
      },
      "LEIauthority": {
        "@context": {
          "otherValidationAuthorityID": {
            "@id": "https://schema.org/taxID"
          },
          "validationAuthorityEntityID": {
            "@id": "https://schema.org/leiCode"
          },
          "validationAuthorityID": {
            "@id": "https://schema.org/identifier"
          }
        },
        "@id": "https://w3id.org/traceability#LEIauthority"
      },
      "LEIentity": {
        "@context": {
          "associatedEntity": {
            "@id": "https://schema.org/Organization"
          },
          "entityCategory": {
            "@id": "https://schema.org/category"
          },
          "expirationDate": {
            "@id": "https://schema.org/expires"
          },
          "expirationReason": {
            "@id": "https://schema.org/Answer"
          },
          "headquartersAddress": {
            "@id": "https://schema.org/PostalAddress"
          },
          "legalAddress": {
            "@id": "https://w3id.org/traceability#LEIaddress"
          },
          "legalForm": {
            "@id": "https://schema.org/additionalType"
          },
          "legalJurisdiction": {
            "@id": "https://schema.org/countryOfOrigin"
          },
          "legalName": {
            "@id": "https://schema.org/legalName"
          },
          "legalNameLanguage": {
            "@id": "https://schema.org/Language"
          },
          "otherAddresses": {
            "@id": "https://schema.org/Place"
          },
          "registrationAuthority": {
            "@id": "https://w3id.org/traceability#LEIauthority"
          },
          "status": {
            "@id": "https://schema.org/status"
          },
          "successorEntity": {
            "@id": "https://schema.org/Corporation"
          }
        },
        "@id": "https://w3id.org/traceability#LEIentity"
      },
      "LEIevidenceDocument": {
        "@context": {
          "entity": {
            "@id": "https://w3id.org/traceability#LEIentity"
          },
          "lei": {
            "@id": "https://www.gleif.org/en/about-lei/iso-17442-the-lei-code-structure#"
          },
          "registration": {
            "@id": "https://w3id.org/traceability#LEIregistration"
          }
        },
        "@id": "https://w3id.org/traceability#LEIevidenceDocument"
      },
      "LEIregistration": {
        "@context": {
          "initialRegistrationDate": {
            "@id": "https://schema.org/dateIssued"
          },
          "lastUpdateDate": {
            "@id": "https://schema.org/dateModified"
          },
          "managingLou": {
            "@id": "https://www.gleif.org/en/about-lei/iso-17442-the-lei-code-structure#"
          },
          "nextRenewalDate": {
            "@id": "https://schema.org/validThrough"
          },
          "status": {
            "@id": "https://schema.org/status"
          },
          "validationAuthority": {
            "@id": "https://w3id.org/traceability#LEIauthority"
          },
          "validationSources": {
            "@id": "https://schema.org/eventStatus"
          }
        },
        "@id": "https://w3id.org/traceability#LEIregistration"
      },
      "LaceyActProductDeclaration": {
        "@context": {
          "articleOrComponent": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#procedureCode"
          },
          "countryOfHarvest": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "enteredValue": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#customsValueSpecifiedAmount"
          },
          "htsNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#applicableRegulatoryProcedure"
          },
          "percentRecycled": {
            "@id": "https://qudt.org/vocab/unit/PERCENT"
          },
          "plantScientificNames": {
            "@id": "https://w3id.org/traceability#Taxonomy"
          },
          "quantityOfPlantMaterial": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#totalPackageSpecifiedQuantity"
          }
        },
        "@id": "https://w3id.org/traceability#LaceyActProductDeclaration"
      },
      "LinkRole": {
        "@context": {
          "linkRelationship": {
            "@id": "https://schema.org/linkRelationship"
          },
          "target": {
            "@id": "https://schema.org/target"
          }
        },
        "@id": "https://schema.org/LinkRole"
      },
      "MapResource": {
        "@context": {
          "external": {
            "@id": "https://w3id.org/traceability#ExternalResource"
          },
          "geoJson": {
            "@id": "https://schema.org/geo"
          },
          "resourceType": {
            "@id": "https://schema.org/additionalType"
          }
        },
        "@id": "https://w3id.org/traceability#MapResource"
      },
      "MasterBillOfLading": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bookingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierAssignedId"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "declaredValue": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#declaredValueForCarriageAmount"
          },
          "forwardingAgent": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#freightForwarderParty"
          },
          "freightAndCharges": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#applicableServiceCharge"
          },
          "includedConsignmentItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "mainCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mainCarriageTransportMovement"
          },
          "notifyParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "onCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#onCarriageTransportMovement"
          },
          "placeOfDelivery": {
            "@id": "https://schema.org/Place"
          },
          "placeOfReceipt": {
            "@id": "https://schema.org/Place"
          },
          "portOfDischarge": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#unloadingLocation"
          },
          "portOfLoading": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transshipmentLocation"
          },
          "preCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#preCarriageTransportMovement"
          },
          "scac": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Standard_Carrier_Alpha_Code_(SCAC)_number"
          },
          "shippedOnBoardDate": {
            "@id": "https://schema.org/Date"
          },
          "shipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "shippersReferences": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Consignment_identifier_freight_forwarder_assigned"
          },
          "termsAndConditions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#termsAndConditionsDescription"
          },
          "totalNumberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "transportEquipmentQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportEquipmentQuantity"
          },
          "utilizedTransportEquipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#utilizedTransportEquipment"
          }
        },
        "@id": "https://w3id.org/traceability#MasterBillOfLading"
      },
      "MasterBillOfLadingCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#MasterBillOfLadingCredential"
      },
      "MeasuredProperty": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#MeasuredProperty"
      },
      "MeasuredValue": {
        "@context": {
          "unitCode": {
            "@id": "https://schema.org/unitCode"
          },
          "value": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://schema.org/QuantitativeValue"
      },
      "MechanicalProperty": {
        "@context": {
          "description": {
            "@id": "https://schema.org/description"
          },
          "identifier": {
            "@id": "https://schema.org/identifier"
          },
          "name": {
            "@id": "https://schema.org/name"
          }
        },
        "@id": "https://w3id.org/traceability#MechanicalProperty"
      },
      "MillTestReportCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#MillTestReportCredential"
      },
      "MonthlyDeliveryStatement": {
        "@context": {
          "itemsDelivered": {
            "@id": "https://w3id.org/traceability#DeliveryStatement"
          }
        },
        "@id": "https://w3id.org/traceability#MonthlyDeliveryStatement"
      },
      "MultiModalBillOfLading": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bookingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierAssignedId"
          },
          "carrier": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierParty"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "declaredValue": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#declaredValueForCarriageAmount"
          },
          "freightAndCharges": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#applicableServiceCharge"
          },
          "includedConsignmentItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "mainCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mainCarriageTransportMovement"
          },
          "notifyParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "onCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#onCarriageTransportMovement"
          },
          "placeOfDelivery": {
            "@id": "https://schema.org/Place"
          },
          "placeOfReceipt": {
            "@id": "https://schema.org/Place"
          },
          "portOfDischarge": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#unloadingLocation"
          },
          "portOfLoading": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transshipmentLocation"
          },
          "preCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#preCarriageTransportMovement"
          },
          "shippedOnBoardDate": {
            "@id": "https://schema.org/Date"
          },
          "shipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "shippersReferences": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Consignment_identifier_freight_forwarder_assigned"
          },
          "termsAndConditions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#termsAndConditionsDescription"
          },
          "totalNumberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "transportEquipmentQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportEquipmentQuantity"
          },
          "utilizedTransportEquipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#utilizedTransportEquipment"
          }
        },
        "@id": "https://w3id.org/traceability#MultiModalBillOfLading"
      },
      "MultiModalBillOfLadingCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#MultiModalBillOfLadingCredential"
      },
      "NAISMADateTime": {
        "@context": {
          "collectionDate": {
            "@id": "http://rs.tdwg.org/dwc/terms/eventDate"
          },
          "dateAccuracyDays": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMADateTime"
      },
      "NAISMAInfestation": {
        "@context": {
          "areaSurveyed": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "incidence": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "infestedArea": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "organismQuantity": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "organismQuantityUnits": {
            "@id": "https://schema.org/unitText"
          },
          "severity": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementValue"
          },
          "severityUnits": {
            "@id": "https://schema.org/unitText"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMAInfestation"
      },
      "NAISMAInformationSource": {
        "@context": {
          "dataSource": {
            "@id": "https://w3id.org/traceability#Entity"
          },
          "examiner": {
            "@id": "http://rs.tdwg.org/dwc/terms/recordedBy"
          },
          "reference": {
            "@id": "http://rs.tdwg.org/dwc/terms/associatedReferences"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMAInformationSource"
      },
      "NAISMALocation": {
        "@context": {
          "centroidType": {
            "@id": "https://schema.org/polygon"
          },
          "coordinateUncertainty": {
            "@id": "http://rs.tdwg.org/dwc/terms/coordinateUncertaintyInMeters"
          },
          "dataType": {
            "@id": "https://schema.org/additionalType"
          },
          "datum": {
            "@id": "http://rs.tdwg.org/dwc/terms/geodeticDatum"
          },
          "description": {
            "@id": "https://schema.org/description"
          },
          "ecosystem": {
            "@id": "http://rs.tdwg.org/dwc/terms/locationRemarks"
          },
          "location": {
            "@id": "https://w3id.org/traceability#Place"
          },
          "sourceOfLocation": {
            "@id": "http://rs.tdwg.org/dwc/terms/georeferenceProtocol"
          },
          "wellKnownText": {
            "@id": "http://rs.tdwg.org/dwc/terms/footprintWKT"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMALocation"
      },
      "NAISMARecordLevelIdentifiers": {
        "@context": {
          "catalogNumber": {
            "@id": "https://schema.org/identifier"
          },
          "pid": {
            "@id": "https://schema.org/identifier"
          },
          "uuid": {
            "@id": "https://schema.org/identifier"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMARecordLevelIdentifiers"
      },
      "NAISMARecordStatus": {
        "@context": {
          "managementStatus": {
            "@id": "https://schema.org/status"
          },
          "method": {
            "@id": "http://rs.tdwg.org/dwc/terms/measurementMethod"
          },
          "occurrenceStatus": {
            "@id": "https://schema.org/status"
          },
          "populationStatus": {
            "@id": "http://rs.tdwg.org/dwc/terms/degreeOfEstablishment"
          },
          "recordBasis": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
          },
          "recordType": {
            "@id": "https://schema.org/description"
          },
          "verificationMethod": {
            "@id": "http://rs.tdwg.org/dwc/terms/identificationRemarks"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMARecordStatus"
      },
      "NAISMASubject": {
        "@context": {
          "comments": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          },
          "hostSpecies": {
            "@id": "https://w3id.org/traceability#Taxonomy"
          },
          "lifeStage": {
            "@id": "http://rs.tdwg.org/dwc/terms/lifeStage"
          },
          "sex": {
            "@id": "http://rs.tdwg.org/dwc/terms/sex"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMASubject"
      },
      "NAISMATaxonomy": {
        "@context": {
          "commonName": {
            "@id": "http://rs.tdwg.org/dwc/terms/vernacularName"
          },
          "speciesName": {
            "@id": "https://w3id.org/traceability#Taxonomy"
          },
          "taxonomicSerialNumber": {
            "@id": "http://rs.tdwg.org/dwc/terms/taxonID"
          }
        },
        "@id": "https://w3id.org/traceability#NAISMATaxonomy"
      },
      "NaturalGasProduct": {
        "@context": {
          "HSCode": {
            "@id": "https://schema.org/identifier"
          },
          "UWI": {
            "@id": "https://schema.org/identifier"
          },
          "facility": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "observation": {
            "@id": "https://w3id.org/traceability#observation"
          },
          "product": {
            "@id": "https://www.gs1.org/voc/Product"
          },
          "productionDate": {
            "@id": "https://schema.org/DateTime"
          }
        },
        "@id": "https://w3id.org/traceability#NaturalGasProduct"
      },
      "NaturalGasProductCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#NaturalGasProductCredential"
      },
      "OGBillOfLading": {
        "@context": {
          "arrivalDate": {
            "@id": "https://schema.org/DateTime"
          },
          "batchNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#batchIdentificationId"
          },
          "billOfLading": {
            "@id": "https://w3id.org/traceability#BillOfLading"
          },
          "closingVolume": {
            "@id": "https://schema.org/MeasuredValue"
          },
          "freightChargeTerms": {
            "@id": "https://schema.org/value"
          },
          "observation": {
            "@id": "https://w3id.org/traceability#observation"
          },
          "openingVolume": {
            "@id": "https://schema.org/MeasuredValue"
          },
          "shippingDate": {
            "@id": "https://schema.org/DateTime"
          },
          "totalOrderValue": {
            "@id": "https://schema.org/value"
          },
          "valuePerItem": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://w3id.org/traceability#OGBillOfLading"
      },
      "Observation": {
        "@context": {
          "date": {
            "@id": "https://schema.org/observationDate"
          },
          "measurement": {
            "@id": "https://w3id.org/traceability#MeasuredValue"
          },
          "property": {
            "@id": "https://schema.org/measuredProperty"
          }
        },
        "@id": "https://schema.org/Observation"
      },
      "Order": {
        "@context": {
          "orderNumber": {
            "@id": "https://schema.org/orderNumber"
          },
          "orderedItems": {
            "@id": "https://schema.org/orderedItem"
          }
        },
        "@id": "https://schema.org/Order"
      },
      "OrderConfirmationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#OrderConfirmationCredential"
      },
      "OrderItem": {
        "@context": {
          "fulfillmentCenter": {
            "@id": "https://vocabulary.uncefact.org/logisticsServiceProviderParty"
          },
          "marketplace": {
            "@id": "https://vocabulary.uncefact.org/Marketplace"
          },
          "orderedItem": {
            "@id": "https://schema.org/orderedItem"
          },
          "orderedQuantity": {
            "@id": "https://schema.org/orderQuantity"
          }
        },
        "@id": "https://schema.org/OrderItem"
      },
      "OrganicCertification": {
        "@context": {
          "anniversaryDate": {
            "@id": "https://www.gs1.org/voc/certificationEndDate"
          },
          "certifiedOperation": {
            "@id": "https://www.gs1.org/voc/certificationSubject"
          },
          "certifyingAgent": {
            "@id": "https://www.gs1.org/voc/certificationAgency"
          },
          "countryOfIssuance": {
            "@id": "https://www.gs1.org/voc/countryCode"
          },
          "effectiveDate": {
            "@id": "https://www.gs1.org/voc/certificationStartDate"
          },
          "issueDate": {
            "@id": "https://www.gs1.org/voc/initialCertificationDate"
          },
          "operationCategory": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          },
          "organicProducts": {
            "@id": "https://www.gs1.org/voc/certificationStatement"
          }
        },
        "@id": "https://w3id.org/traceability#OrganicCertification"
      },
      "OrganicCertificationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#OrganicCertificationCredential"
      },
      "OrganicInspection": {
        "@context": {
          "OSPSectionReviews": {
            "@id": "https://w3id.org/traceability#OrganicOSPSectionReview"
          },
          "announcedInspection": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "applicantCertificationNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "attachments": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#additionalDocument"
          },
          "authorizedOperationContacts": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "continuingCertification": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "estimatedHarvestDate": {
            "@id": "https://www.gs1.org/voc/harvestDate"
          },
          "introductionOperationDescription": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "issuesRequests": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#additionalDescription"
          },
          "newApplicant": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "newLocationActivity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "peoplePresent": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "pesticideResidueSampling": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "reinstatement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "resolutionIssuesActionItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "samplingDetails": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#content"
          }
        },
        "@id": "https://w3id.org/traceability#OrganicInspection"
      },
      "OrganicOSPSectionReview": {
        "@context": {
          "OSPSectionCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#standard"
          },
          "attachments": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#additionalDocument"
          },
          "resultCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#assertionCode"
          },
          "verificationExplanations": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          }
        },
        "@id": "https://w3id.org/traceability#OrganicOSPSectionReview"
      },
      "OrganicProductCertification": {
        "@context": {
          "agricultureProduct": {
            "@id": "https://www.gs1.org/voc/certificationSubject"
          },
          "isCertified": {
            "@id": "https://www.gs1.org/voc/certificationStatus"
          },
          "organicCertification": {
            "@id": "https://www.gs1.org/voc/certification"
          }
        },
        "@id": "https://w3id.org/traceability#OrganicProductCertification"
      },
      "OrganicReview": {
        "@context": {
          "additionalInformation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#content"
          },
          "certificationDecision": {
            "@id": "https://www.gs1.org/voc/certificationStatus"
          },
          "decisionMaker": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "inspectionReport": {
            "@id": "https://w3id.org/traceability#OrganicInspection"
          },
          "reviewer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          }
        },
        "@id": "https://w3id.org/traceability#OrganicReview"
      },
      "Organization": {
        "@context": {
          "brand": {
            "@id": "https://schema.org/Brand"
          },
          "contactPoint": {
            "@id": "https://schema.org/ContactPoint"
          },
          "description": {
            "@id": "https://schema.org/description"
          },
          "email": {
            "@id": "https://schema.org/email"
          },
          "faxNumber": {
            "@id": "https://schema.org/faxNumber"
          },
          "globalLocationNumber": {
            "@id": "https://schema.org/globalLocationNumber"
          },
          "iataCarrierCode": {
            "@id": "https://onerecord.iata.org/cargo/Company#airlineCode"
          },
          "legalName": {
            "@id": "https://schema.org/legalName"
          },
          "leiCode": {
            "@id": "https://schema.org/leiCode"
          },
          "location": {
            "@id": "https://schema.org/location"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "phoneNumber": {
            "@id": "https://schema.org/telephone"
          },
          "taxId": {
            "@id": "https://schema.org/taxID"
          },
          "url": {
            "@id": "https://schema.org/url"
          }
        },
        "@id": "https://schema.org/Organization"
      },
      "OssfScorecard": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#OssfScorecard"
      },
      "PGAShipmentStatus": {
        "@context": {
          "entryLineSequence": {
            "@id": "https://w3id.org/traceability#entryLineSequence"
          },
          "entryNo": {
            "@id": "https://w3id.org/traceability#entryNo"
          },
          "recordNo": {
            "@id": "https://w3id.org/traceability#recordNo"
          },
          "statusCode": {
            "@id": "https://w3id.org/traceability#statusCode"
          },
          "statusCodeDescription": {
            "@id": "https://w3id.org/traceability#statusCodeDescription"
          },
          "subReasonCode": {
            "@id": "https://w3id.org/traceability#subReasonCode"
          },
          "subReasonCodeDescription": {
            "@id": "https://w3id.org/traceability#subReasonCodeDescription"
          },
          "validCodeReason": {
            "@id": "https://w3id.org/traceability#validCodeReason"
          },
          "validCodeReasonDescription": {
            "@id": "https://w3id.org/traceability#validCodeReasonDescription"
          }
        },
        "@id": "https://w3id.org/traceability#PGAShipmentStatus"
      },
      "PGAShipmentStatusCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#PGAShipmentStatusCredential"
      },
      "PGAShipmentStatusList": {
        "@context": {
          "pgaShipmentStatusItems": {
            "@id": "https://schema.org/ItemList"
          }
        },
        "@id": "https://w3id.org/traceability#PGAShipmentStatusList"
      },
      "Package": {
        "@context": {
          "depth": {
            "@id": "https://schema.org/depth"
          },
          "grossVolume": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossVolumeMeasure"
          },
          "grossWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "height": {
            "@id": "https://schema.org/height"
          },
          "includedTradeLineItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedTradeLineItem"
          },
          "netWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#netWeightMeasure"
          },
          "packagingType": {
            "@id": "https://www.gs1.org/voc/packagingMaterial"
          },
          "perPackageUnitQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#perPackageUnitQuantity"
          },
          "physicalShippingMarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#physicalShippingMarks"
          },
          "width": {
            "@id": "https://schema.org/width"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Package"
      },
      "PackingList": {
        "@context": {
          "buyer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerParty"
          },
          "deliveryStatus": {
            "@id": "https://schema.org/deliveryStatus"
          },
          "estimatedTimeOfArrival": {
            "@id": "https://schema.org/arrivalTime"
          },
          "handlingInstructions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#handlingInstructions"
          },
          "hasDeliveryMethod": {
            "@id": "https://schema.org/hasDeliveryMethod"
          },
          "invoiceId": {
            "@id": "https://schema.org/identifier"
          },
          "orderNumber": {
            "@id": "https://schema.org/orderNumber"
          },
          "partOfOrder": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "seller": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sellerParty"
          },
          "shipFromParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipFromParty"
          },
          "shipToParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipToParty"
          },
          "shipmentId": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipmentIdentificationId"
          },
          "totalGrossVolume": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossVolumeMeasure"
          },
          "totalGrossWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "totalItemQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#tradeLineItemQuantity"
          },
          "totalNetWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#netWeightMeasure"
          },
          "totalNumberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "trackingNumber": {
            "@id": "https://schema.org/trackingNumber"
          }
        },
        "@id": "https://w3id.org/traceability#PackingList"
      },
      "PackingListCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#PackingListCredential"
      },
      "ParcelDelivery": {
        "@context": {
          "consignee": {
            "@id": "https://schema.org/Organization"
          },
          "deliveryAddress": {
            "@id": "https://schema.org/deliveryAddress"
          },
          "deliveryMethod": {
            "@id": "https://schema.org/DeliveryMethod"
          },
          "expectedArrival": {
            "@id": "https://schema.org/expectedArrivalFrom"
          },
          "item": {
            "@id": "https://schema.org/itemShipped"
          },
          "originAddress": {
            "@id": "https://schema.org/originAddress"
          },
          "partOfOrder": {
            "@id": "https://schema.org/partOfOrder"
          },
          "specialInstructions": {
            "@id": "https://schema.org/comment"
          },
          "trackingNumber": {
            "@id": "https://schema.org/trackingNumber"
          }
        },
        "@id": "https://schema.org/ParcelDelivery"
      },
      "PartOfOrder": {
        "@context": {
          "grossVolume": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossVolumeMeasure"
          },
          "grossWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "itemQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#tradeLineItemQuantity"
          },
          "manufacturer": {
            "@id": "https://schema.org/Organization"
          },
          "netWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#netWeightMeasure"
          },
          "orderNumber": {
            "@id": "https://schema.org/orderNumber"
          },
          "packageQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "transportPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Package"
          }
        },
        "@id": "https://schema.org/OrderItem"
      },
      "Person": {
        "@context": {
          "email": {
            "@id": "https://schema.org/email"
          },
          "firstName": {
            "@id": "https://schema.org/givenName"
          },
          "jobTitle": {
            "@id": "https://schema.org/jobTitle"
          },
          "lastName": {
            "@id": "https://schema.org/familyName"
          },
          "phoneNumber": {
            "@id": "https://schema.org/telephone"
          },
          "taxId": {
            "@id": "https://schema.org/taxID"
          },
          "worksFor": {
            "@id": "https://schema.org/worksFor"
          }
        },
        "@id": "https://schema.org/Person"
      },
      "PestDetermination": {
        "@context": {
          "date": {
            "@id": "https://dwc.tdwg.org/list/#dwc_dateIdentified"
          },
          "determination": {
            "@id": "https://w3id.org/traceability#Taxonomy"
          },
          "determinedBy": {
            "@id": "https://dwc.tdwg.org/list/#dwc_identifiedBy"
          },
          "final": {
            "@id": "https://dwc.tdwg.org/list/#dwc_identificationVerificationStatus"
          },
          "method": {
            "@id": "https://dwc.tdwg.org/list/#dwc_measurementMethod"
          },
          "notes": {
            "@id": "https://dwc.tdwg.org/list/#dwc_identificationRemarks"
          },
          "reportable": {
            "@id": "https://dwc.tdwg.org/list/#dwc_occurrenceStatus"
          }
        },
        "@id": "https://w3id.org/traceability#PestDetermination"
      },
      "PestSample": {
        "@context": {
          "affected": {
            "@id": "https://dwc.tdwg.org/list/#dwc_measurementValue"
          },
          "aliveAdults": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "aliveCysts": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "aliveEggs": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "aliveJuveniles": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "aliveLarvae": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "aliveNymphs": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "alivePupae": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "castSkins": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadAdults": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadCysts": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadEggs": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadJuveniles": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadLarvae": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadNymphs": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "deadPupae": {
            "@id": "http://rs.tdwg.org/dwc/terms/individualCount"
          },
          "hostName": {
            "@id": "https://w3id.org/traceability#Taxonomy"
          },
          "hostQuantity": {
            "@id": "http://rs.tdwg.org/dwc/terms/organismQuantity"
          },
          "pestDistribution": {
            "@id": "http://rs.tdwg.org/dwc/terms/degreeOfEstablishment"
          },
          "pestProximity": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          },
          "pestType": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          },
          "plantDistribution": {
            "@id": "http://rs.tdwg.org/dwc/terms/degreeOfEstablishment"
          },
          "plantPartsAffected": {
            "@id": "http://rs.tdwg.org/dwc/terms/occurrenceRemarks"
          },
          "samplingMethod": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
          },
          "trapLureType": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
          },
          "trapNumber": {
            "@id": "http://rs.tdwg.org/dwc/terms/samplingProtocol"
          }
        },
        "@id": "https://w3id.org/traceability#PestSample"
      },
      "Phytosanitary": {
        "@context": {
          "additionalDeclaration": {
            "@id": "https://schema.org/Comment"
          },
          "agriculturePackage": {
            "@id": "https://w3id.org/traceability#AgriculturePackage"
          },
          "applicant": {
            "@id": "https://w3c-ccg.github.io/traceability-vocab/#dfn-entities"
          },
          "certificateNumber": {
            "@id": "https://schema.org/identifier"
          },
          "disinfectionChemical": {
            "@id": "https://schema.org/activeIngredient"
          },
          "disinfectionConcentration": {
            "@id": "https://w3id.org/traceability#disinfectionConcentration"
          },
          "disinfectionDate": {
            "@id": "https://schema.org/validFrom"
          },
          "disinfectionDuration": {
            "@id": "https://schema.org/duration"
          },
          "disinfectionTemperature": {
            "@id": "https://schema.org/MeasuredValue"
          },
          "disinfectionTreatment": {
            "@id": "https://w3id.org/traceability#disinfectionTreatment"
          },
          "distinguishingMarks": {
            "@id": "https://www.gs1.org/voc/variantDescription"
          },
          "facility": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "inspectionDate": {
            "@id": "https://schema.org/DateTime"
          },
          "inspectionType": {
            "@id": "https://schema.org/value"
          },
          "inspector": {
            "@id": "https://w3id.org/traceability#Inspector"
          },
          "notes": {
            "@id": "https://schema.org/Comment"
          },
          "observation": {
            "@id": "https://schema.org/ItemList"
          },
          "plantOrg": {
            "@id": "https://www.gs1.org/voc/Organization"
          },
          "portOfEntry": {
            "@id": "https://w3id.org/traceability#portOfEntry"
          },
          "shipment": {
            "@id": "https://schema.org/AgricultureParcelDelivery"
          },
          "signatureDate": {
            "@id": "https://schema.org/DateTime"
          }
        },
        "@id": "https://w3id.org/traceability/Phytosanitary"
      },
      "Place": {
        "@context": {
          "address": {
            "@id": "https://schema.org/PostalAddress"
          },
          "geo": {
            "@id": "https://schema.org/GeoCoordinates"
          },
          "globalLocationNumber": {
            "@id": "https://schema.org/globalLocationNumber"
          },
          "iataAirportCode": {
            "@id": "https://onerecord.iata.org/cargo/Location#code"
          },
          "locationName": {
            "@id": "https://schema.org/name"
          },
          "unLocode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#UNECELOCODE"
          }
        },
        "@id": "https://schema.org/Place"
      },
      "PlantSystemsInspection": {
        "@context": {
          "additionalViolations": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "observationsImprovements": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "productsPacked": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedProduct"
          },
          "questions": {
            "@id": "https://w3id.org/traceability#PlantSystemsQuestion"
          },
          "summaryOfDeficiencies": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          }
        },
        "@id": "https://w3id.org/traceability#PlantSystemsInspection"
      },
      "PlantSystemsInspectionCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#PlantSystemsInspectionCredential"
      },
      "PlantSystemsQuestion": {
        "@context": {
          "code": {
            "@id": "https://schema.org/identifier"
          },
          "pointsDeducted": {
            "@id": "https://schema.org/ratingValue"
          },
          "pointsWorth": {
            "@id": "https://schema.org/ratingValue"
          }
        },
        "@id": "https://w3id.org/traceability#PlantSystemsQuestion"
      },
      "PostalAddress": {
        "@context": {
          "addressCountry": {
            "@id": "https://schema.org/addressCountry"
          },
          "addressLocality": {
            "@id": "https://schema.org/addressLocality"
          },
          "addressRegion": {
            "@id": "https://schema.org/addressRegion"
          },
          "countyCode": {
            "@id": "https://gs1.org/voc/countyCode"
          },
          "crossStreet": {
            "@id": "https://gs1.org/voc/crossStreet"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "postOfficeBoxNumber": {
            "@id": "https://schema.org/postOfficeBoxNumber"
          },
          "postalCode": {
            "@id": "https://schema.org/postalCode"
          },
          "streetAddress": {
            "@id": "https://schema.org/streetAddress"
          }
        },
        "@id": "https://schema.org/PostalAddress"
      },
      "PostmanCollection": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#PostmanCollection"
      },
      "PriceSpecification": {
        "@context": {
          "price": {
            "@id": "https://schema.org/price"
          },
          "priceCurrency": {
            "@id": "https://schema.org/priceCurrency"
          }
        },
        "@id": "https://schema.org/PriceSpecification"
      },
      "Product": {
        "@context": {
          "batchNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#batchIdentificationId"
          },
          "category": {
            "@id": "https://schema.org/category"
          },
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "depth": {
            "@id": "https://schema.org/depth"
          },
          "description": {
            "@id": "https://schema.org/description"
          },
          "gtin": {
            "@id": "https://schema.org/gtin"
          },
          "height": {
            "@id": "https://schema.org/height"
          },
          "images": {
            "@id": "https://schema.org/image"
          },
          "manufacturer": {
            "@id": "https://schema.org/manufacturer"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "productPrice": {
            "@id": "https://schema.org/priceSpecification"
          },
          "seller": {
            "@id": "https://vocabulary.uncefact.org/sellerParty"
          },
          "sizeOrAmount": {
            "@id": "https://schema.org/size"
          },
          "sku": {
            "@id": "https://schema.org/sku"
          },
          "weight": {
            "@id": "https://schema.org/weight"
          },
          "width": {
            "@id": "https://schema.org/width"
          }
        },
        "@id": "https://schema.org/Product"
      },
      "ProductRegistrationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#ProductRegistrationCredential"
      },
      "ProformaInvoiceCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#ProformaInvoiceCredential"
      },
      "Purchase": {
        "@context": {
          "customer": {
            "@id": "https://w3id.org/traceability#Entity"
          },
          "invoice": {
            "@id": "https://w3id.org/traceability#Invoice"
          },
          "purchaseOrderNo": {
            "@id": "https://schema.org/identifier"
          }
        },
        "@id": "https://w3id.org/traceability#Purchase"
      },
      "PurchaseOrder": {
        "@context": {
          "buyer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerParty"
          },
          "comments": {
            "@id": "https://schema.org/Comment"
          },
          "currencyOfSettlement": {
            "@id": "https://schema.org/currency"
          },
          "destinationCountry": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#destinationCountry"
          },
          "discounts": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#deductionAmount"
          },
          "freightCost": {
            "@id": "https://schema.org/DeliveryChargeSpecification"
          },
          "insuranceCost": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#insuranceChargeTotalAmount"
          },
          "itemsOrdered": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TradeLineItem"
          },
          "orderDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#buyerOrderDateTime"
          },
          "originCountry": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "packageQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "portOfEntry": {
            "@id": "https://schema.org/Place"
          },
          "purchaseOrderNo": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Proposed_purchase_order_reference_number"
          },
          "seller": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sellerParty"
          },
          "shipToParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipToParty"
          },
          "tax": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#taxTotalAmount"
          },
          "termsOfDelivery": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedDeliveryTerms"
          },
          "termsOfPayment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPaymentTerms"
          },
          "totalOrderAmount": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#MonetarySummation"
          },
          "totalPaymentDue": {
            "@id": "https://schema.org/totalPaymentDue"
          },
          "totalWeight": {
            "@id": "https://schema.org/weight"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1001/#Purchase_order"
      },
      "PurchaseOrderCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#PurchaseOrderCredential"
      },
      "Qualification": {
        "@context": {
          "qualificationCategory": {
            "@id": "https://schema.org/credentialCategory"
          },
          "qualificationValue": {
            "@id": "https://schema.org/hasCredential"
          }
        },
        "@id": "https://schema.org/qualifications"
      },
      "QuantitativeValue": {
        "@context": {
          "unitCode": {
            "@id": "https://schema.org/unitCode"
          },
          "value": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://schema.org/QuantitativeValue"
      },
      "RawMaterial": {
        "@context": {
          "inchiKey": {
            "@id": "https://w3id.org/traceability#inchiKey"
          },
          "name": {
            "@id": "https://schema.org/name"
          }
        },
        "@id": "https://w3id.org/traceability#RawMaterial"
      },
      "RevocationList2020Status": {
        "@context": {
          "revocationListCredential": {
            "@id": "https://schema.org/LinkRole"
          },
          "revocationListIndex": {
            "@id": "https://schema.org/itemListElement"
          }
        },
        "@id": "https://w3id.org/traceability#RevocationList2020Status"
      },
      "RoutingInfo": {
        "@context": {
          "code": {
            "@id": "https://w3id.org/traceability#routingInfoCode"
          },
          "value": {
            "@id": "https://w3id.org/traceability#routingInfoValue"
          }
        },
        "@id": "https://w3id.org/traceability#RoutingInfo"
      },
      "SIMASteelImportLicense": {
        "@context": {
          "applicantCompany": {
            "@id": "https://schema.org/Organization"
          },
          "countryOfExportation": {
            "@id": "https://schema.org/addressCountry"
          },
          "countryOfMeltAndPour": {
            "@id": "https://w3id.org/traceability#countryOfMeltAndPour"
          },
          "countryOfOrigin": {
            "@id": "https://schema.org/addressCountry"
          },
          "customsEntryNumber": {
            "@id": "https://schema.org/identifier"
          },
          "expectedDateOfExport": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#exportExitDateTime"
          },
          "expectedDateOfImport": {
            "@id": "https://w3id.org/traceability#importDateTime"
          },
          "expectedPortOfEntry": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#UNECELOCODE"
          },
          "exporter": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#exporterParty"
          },
          "importer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#importerParty"
          },
          "licenseNumber": {
            "@id": "https://schema.org/identifier"
          },
          "manufacturer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manufacturerParty"
          },
          "productInformation": {
            "@id": "https://w3id.org/traceability#productInformation"
          }
        },
        "@id": "https://w3id.org/traceability#SIMASteelImportLicense"
      },
      "SIMASteelImportLicenseApplicationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#SIMASteelImportLicenseApplicationCredential"
      },
      "SIMASteelImportLicenseCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#SIMASteelImportLicenseCredential"
      },
      "SIMASteelImportProductSpecifier": {
        "@context": {
          "customsValue": {
            "@id": "https://schema.org/MonetaryAmount"
          },
          "productCategory": {
            "@id": "https://w3id.org/traceability#ProductCategory"
          },
          "steelProduct": {
            "@id": "https://w3id.org/traceability#SteelProduct"
          }
        },
        "@id": "https://w3id.org/traceability#SIMASteelImportProductSpecifier"
      },
      "SeaCargoManifest": {
        "@context": {
          "grossTonnage": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "netTonnage": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#netWeightMeasure"
          },
          "plannedArrivalDateTime": {
            "@id": "https://schema.org/DateTime"
          },
          "plannedDepartureDateTime": {
            "@id": "https://schema.org/Date"
          },
          "portOfArrival": {
            "@id": "https://schema.org/Place"
          },
          "portOfDeparture": {
            "@id": "https://schema.org/Place"
          },
          "registrationCountry": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#registrationCountry"
          },
          "totalNumberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "totalNumberOfTransportDocuments": {
            "@id": "https://schema.org/Number"
          },
          "transportDocumentInformation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportContractDocument"
          },
          "transportEquipmentQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportEquipmentQuantity"
          },
          "vesselName": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TransportMeans"
          },
          "vesselNumber": {
            "@id": "https://schema.org/identifier"
          },
          "voyageNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TransportMovement"
          }
        },
        "@id": "https://w3id.org/traceability#SeaCargoManifest"
      },
      "SeaCargoManifestCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#SeaCargoManifestCredential"
      },
      "Seal": {
        "@context": {
          "sealNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#seal_number"
          },
          "sealSource": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/sealSource"
          },
          "sealType": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#sealTypeCode"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#Seal"
      },
      "SellerRegistrationCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#SellerRegistrationCredential"
      },
      "ServiceCharge": {
        "@context": {
          "appliedAmount": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#appliedAmount"
          },
          "calculationBasis": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#calculationBasis"
          },
          "chargeCode": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#chargeCategoryCode"
          },
          "chargeText": {
            "@id": "https://schema.org/description"
          },
          "paymentTerm": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#PaymentTerms"
          },
          "rate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#unitPrice"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#ServiceCharge"
      },
      "ShippingInstructions": {
        "@context": {
          "billOfLadingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Bill_of_lading_number"
          },
          "bookingNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#carrierAssignedId"
          },
          "consignee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consigneeParty"
          },
          "declaredValue": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#declaredValueForCarriageAmount"
          },
          "includedConsignmentItems": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#includedConsignmentItem"
          },
          "mainCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mainCarriageTransportMovement"
          },
          "notifyParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#notifyParty"
          },
          "onCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#onCarriageTransportMovement"
          },
          "placeOfDelivery": {
            "@id": "https://schema.org/Place"
          },
          "placeOfReceipt": {
            "@id": "https://schema.org/Place"
          },
          "portOfDischarge": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#unloadingLocation"
          },
          "portOfLoading": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transshipmentLocation"
          },
          "preCarriageTransportMovement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#preCarriageTransportMovement"
          },
          "shipper": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignorParty"
          },
          "shippersReferences": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncl1153/#Consignment_identifier_freight_forwarder_assigned"
          },
          "totalNumberOfPackages": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "transportEquipmentQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportEquipmentQuantity"
          },
          "utilizedTransportEquipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#utilizedTransportEquipment"
          }
        },
        "@id": "https://w3id.org/traceability#ShippingInstructions"
      },
      "ShippingInstructionsCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#ShippingInstructionsCredential"
      },
      "ShippingStop": {
        "@context": {
          "arrivalDate": {
            "@id": "https://schema.org/Date"
          },
          "carrier": {
            "@id": "https://schema.org/Organization"
          },
          "from": {
            "@id": "https://schema.org/Place"
          },
          "stopType": {
            "@id": "https://schema.org/description"
          },
          "to": {
            "@id": "https://schema.org/Place"
          },
          "vesselNumber": {
            "@id": "https://schema.org/identifier"
          }
        },
        "@id": "https://w3id.org/traceability#ShippingStop"
      },
      "SoftwareBillOfMaterials": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#SoftwareBillOfMaterials"
      },
      "SoftwareBillofMaterialsCredential": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#SoftwareBillOfMaterialsCredential"
      },
      "SteelProduct": {
        "@context": {
          "commodity": {
            "@id": "https://w3id.org/traceability#Commodity"
          },
          "grade": {
            "@id": "https://schema.org/Rating"
          },
          "heatNumber": {
            "@id": "https://schema.org/identifier"
          },
          "originalCountryOfMeltAndPour": {
            "@id": "https://schema.org/addressCountry"
          },
          "specification": {
            "@id": "https://schema.org/identifier"
          },
          "weight": {
            "@id": "https://schema.org/weight"
          },
          "weightUnit": {
            "@id": "http://qudt.org/schema/qudt/Unit"
          }
        },
        "@id": "https://w3id.org/traceability#SteelProduct"
      },
      "Taxonomy": {
        "@context": {
          "class": {
            "@id": "http://rs.tdwg.org/dwc/terms/class"
          },
          "family": {
            "@id": "http://rs.tdwg.org/dwc/terms/family"
          },
          "genus": {
            "@id": "http://rs.tdwg.org/dwc/terms/genus"
          },
          "kingdom": {
            "@id": "http://rs.tdwg.org/dwc/terms/kingdom"
          },
          "order": {
            "@id": "http://rs.tdwg.org/dwc/terms/order"
          },
          "phylum": {
            "@id": "http://rs.tdwg.org/dwc/terms/phylum"
          },
          "species": {
            "@id": "http://rs.tdwg.org/dwc/terms/specificEpithet"
          },
          "subspecies": {
            "@id": "http://rs.tdwg.org/dwc/terms/infraspecificEpithet"
          },
          "variety": {
            "@id": "http://rs.tdwg.org/dwc/terms/cultivarEpithet"
          }
        },
        "@id": "https://w3id.org/traceability#Taxonomy"
      },
      "TemperatureReading": {
        "@context": {
          "bulbNumber": {
            "@id": "https://schema.org/identifier"
          },
          "tests": {
            "@id": "https://schema.org/value"
          }
        },
        "@id": "https://w3id.org/traceability#TemperatureReading"
      },
      "Template": {
        "@context": {
          "image": {
            "@id": "https://schema.org/image"
          }
        },
        "@id": "https://w3id.org/traceability#Template"
      },
      "TraceabilityAPI": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#TraceabilityAPI"
      },
      "TraceablePresentation": {
        "@context": {
          "workflow": {
            "@id": "https://w3id.org/traceability#Workflow"
          }
        },
        "@id": "https://w3id.org/traceability#TraceablePresentation"
      },
      "TradeLineItem": {
        "@context": {
          "countryOfOrigin": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originCountry"
          },
          "description": {
            "@id": "https://schema.org/description"
          },
          "grossWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "itemCount": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#despatchedQuantity"
          },
          "name": {
            "@id": "https://schema.org/name"
          },
          "netWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#netWeightMeasure"
          },
          "packageQuantity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#packageQuantity"
          },
          "priceSpecification": {
            "@id": "https://schema.org/priceSpecification"
          },
          "product": {
            "@id": "https://schema.org/Product"
          },
          "purchaseOrderNumber": {
            "@id": "https://schema.org/orderNumber"
          },
          "shipToParty": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#shipToParty"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TradeLineItem"
      },
      "TransferEvent": {
        "@context": {
          "addressCountry": {
            "@id": "https://schema.org/addressCountry"
          },
          "identifier": {
            "@id": "https://schema.org/identifier"
          },
          "organization": {
            "@id": "https://w3id.org/traceability#Organization"
          },
          "place": {
            "@id": "https://schema.org/Place"
          },
          "price": {
            "@id": "https://schema.org/price"
          },
          "products": {
            "@id": "https://w3c-ccg.github.io/hashlink/#hl-url-params"
          }
        },
        "@id": "https://w3id.org/traceability#TransferEvent"
      },
      "TransformEvent": {
        "@context": {
          "consumedProducts": {
            "@id": "https://w3c-ccg.github.io/hashlink/#hl-url-params"
          },
          "newProducts": {
            "@id": "https://w3c-ccg.github.io/hashlink/#hl-url-params"
          },
          "organization": {
            "@id": "https://w3id.org/traceability#Organization"
          },
          "place": {
            "@id": "https://schema.org/Place"
          }
        },
        "@id": "https://w3id.org/traceability#TransformEvent"
      },
      "Transport": {
        "@context": {
          "carrier": {
            "@id": "https://schema.org/Organization"
          },
          "dischargeLocation": {
            "@id": "https://schema.org/Place"
          },
          "loadLocation": {
            "@id": "https://schema.org/Place"
          },
          "modeOfTransport": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/modeOfTransport"
          },
          "plannedArrivalDate": {
            "@id": "https://schema.org/Date"
          },
          "plannedDepartureDate": {
            "@id": "https://schema.org/Date"
          },
          "vesselNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TransportMeans"
          },
          "voyageNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TransportMovement"
          }
        },
        "@id": "https://w3id.org/traceability#Transport"
      },
      "TransportDocument": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#TransportDocument"
      },
      "TransportEquipment": {
        "@context": {
          "ISOEquipmentCode": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/ISOEquipmentCode"
          },
          "equipmentReference": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "isShipperOwned": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/isShipperOwned"
          },
          "seals": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#affixedSeal"
          },
          "tareWeight": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#grossWeightMeasure"
          },
          "weightUnit": {
            "@id": "https://api.swaggerhub.com/domains/dcsaorg/DCSA_DOMAIN/1.0.1#/components/schemas/weightUnit"
          }
        },
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#TransportEquipment"
      },
      "TransportEvent": {
        "@context": {
          "deliveryMethod": {
            "@id": "https://schema.org/DeliveryMethod"
          },
          "organization": {
            "@id": "https://w3id.org/traceability#Organization"
          },
          "place": {
            "@id": "https://schema.org/Place"
          },
          "products": {
            "@id": "https://w3c-ccg.github.io/hashlink/#hl-url-params"
          },
          "trackingNumber": {
            "@id": "https://schema.org/trackingNumber"
          }
        },
        "@id": "https://w3id.org/traceability#TransportEvent"
      },
      "USDAPPQ203ForeignSiteInspection": {
        "@context": {
          "certificateNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "commonInfo": {
            "@id": "https://w3id.org/traceability#AgricultureInspectionCommonInfo"
          },
          "inspectionType": {
            "@id": "https://www.gs1.org/voc/certificationType"
          },
          "observations": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#relatedObservation"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          },
          "signatureDate": {
            "@id": "https://www.gs1.org/voc/certificationAuditDate"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ203ForeignSiteInspection"
      },
      "USDAPPQ309APestInterceptionRecord": {
        "@context": {
          "PestSample": {
            "@id": "http://rs.tdwg.org/dwc/terms/materialSampleID"
          },
          "forwardTo": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#recipientParty"
          },
          "importedAs": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "inspector": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#inspectionParty"
          },
          "interceptionDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualOccurrenceDateTime"
          },
          "interceptionNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "materialFor": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#intendedUse"
          },
          "modeOfTransportation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mode"
          },
          "narp": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#statementNote"
          },
          "overtime": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#information"
          },
          "pathway": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#mode"
          },
          "pestDeterminations": {
            "@id": "https://dwc.tdwg.org/list/#dwc_identificationID"
          },
          "priority": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#priorityCode"
          },
          "quarantineStatus": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#conditionCode"
          },
          "remarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remark"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          },
          "shippingStop": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#itineraryStopEvent"
          },
          "whereIntercepted": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#attachedTransportEquipment"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ309APestInterceptionRecord"
      },
      "USDAPPQ368NoticeOfArrival": {
        "@context": {
          "ITNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#customsIdentificationId"
          },
          "arrivalDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualArrivalRelatedDateTime"
          },
          "customsEntryNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#customsIdentificationId"
          },
          "locationGrown": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#originLocation"
          },
          "permitNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "ppqOfficial": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#inspectionParty"
          },
          "presentLocation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#consignmentDestinationSpecifiedLocation"
          },
          "productDisposition": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#dispositionDocument"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          },
          "signatureDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#occurrenceDateTime"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ368NoticeOfArrival"
      },
      "USDAPPQ391SpecimensForDetermination": {
        "@context": {
          "collectionDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualOccurrenceDateTime"
          },
          "collectionNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "collector": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#inspectionParty"
          },
          "dateReceived": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#acceptanceDateTime"
          },
          "finalDetermination": {
            "@id": "https://dwc.tdwg.org/list/#dwc_identificationID"
          },
          "identificationReason": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reasonCode"
          },
          "interceptionSite": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#occurrenceLocation"
          },
          "lab": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#lodgementLocation"
          },
          "labConformationNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "priority": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#priorityCode"
          },
          "priorityExplanation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "remarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "sampleDisposition": {
            "@id": "https://dwc.tdwg.org/list/#dwc_disposition"
          },
          "signatureDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#occurrenceDateTime"
          },
          "submissionDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportSubmissionDateTime"
          },
          "submitter": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#senderParty"
          },
          "submittingAgency": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#agencyId"
          },
          "tentativeDetermination": {
            "@id": "https://dwc.tdwg.org/list/#dwc_identificationID"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ391SpecimensForDetermination"
      },
      "USDAPPQ429FumigationRecord": {
        "@context": {
          "cubicCapacity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualReportedMeasurement"
          },
          "dateFumigated": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualOccurrenceDateTime"
          },
          "dateFumigationOrdered": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualDateTime"
          },
          "detectorTubeReadings": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#relatedObservation"
          },
          "enclosure": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "foodOrFeedCommodity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#functionDescription"
          },
          "fumigantAndTreatmentSchedule": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#regulationName"
          },
          "fumigationContractor": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "fumigationSite": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#occurrenceLocation"
          },
          "fumigatorMaterials": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "gasAnalyzer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "gasConcentrations": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#relatedObservation"
          },
          "gasIntroductionFinish": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#endDateTime"
          },
          "gasIntroductionStart": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#startDateTime"
          },
          "inspector": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "interceptionRecord": {
            "@id": "https://w3id.org/traceability#USDAPPQ309APestInterceptionRecord.yml"
          },
          "numberOfFans": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#unitQuantity"
          },
          "pest": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "ppqMaterials": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "preparationProcedures": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "remarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remark"
          },
          "residueSampleNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          },
          "residueSampleTaken": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#value"
          },
          "reviewer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "section18Exemption": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#value"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          },
          "stationReporting": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#relevantLocation"
          },
          "tarpaulin": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#value"
          },
          "temperatureOfCommodity": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualReportedMeasurement"
          },
          "temperatureOfSpace": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualReportedMeasurement"
          },
          "timeFansOperated": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#durationMeasure"
          },
          "totalCFMOfFans": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualReportedMeasurement"
          },
          "totalGasIntroduced": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#actualReportedMeasurement"
          },
          "weatherConditions": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#description"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ429FumigationRecord"
      },
      "USDAPPQ449RTemperatureCalibration": {
        "@context": {
          "cableLengthSatisfactory": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "company": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedOrganization"
          },
          "flagCode": {
            "@id": "https://schema.org/value"
          },
          "hullNumberDockyard": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "imoNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#identificationId"
          },
          "inspectionDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#performanceDateTime"
          },
          "inspectionPoint": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transitLocation"
          },
          "instrument1MakeModel": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#attachedTransportEquipment"
          },
          "instrument2MakeModel": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#attachedTransportEquipment"
          },
          "locationsDiagramMatchSatisfactory": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "ownerOperator": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "participatingOfficials": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "ppqDutyStation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transitCustomsOfficeSpecifiedLocation"
          },
          "reactionTimeSatisfactory": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "remarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "sensorsBoxesLabelingSatisfactory": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportedStatus"
          },
          "shipsOfficer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedPerson"
          },
          "signatureDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#performanceDateTime"
          },
          "temperatureReadings": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportTemperature"
          },
          "vesselName": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#name"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ449RTemperatureCalibration"
      },
      "USDAPPQ505PlantDeclaration": {
        "@context": {
          "date": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueDateTime"
          },
          "preparer": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#declarantParty"
          },
          "productDeclarations": {
            "@id": "https://w3id.org/traceability#LaceyActProductDeclaration"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ505PlantDeclaration"
      },
      "USDAPPQ519ComplianceAgreement": {
        "@context": {
          "agreement": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#guarantee"
          },
          "agreementDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueDateTime"
          },
          "agreementNumber": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueDateTime"
          },
          "firm": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "person": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "ppqCbpOfficial": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "quarantinesRegulations": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#applicableRegulatoryProcedure"
          },
          "regulatedArticles": {
            "@id": "https://www.gs1.org/voc/regulatedProductName"
          },
          "signatureDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueDateTime"
          },
          "usAgencyOfficial": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ519ComplianceAgreement"
      },
      "USDAPPQ587PlantImportApplication": {
        "@context": {
          "applicant": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "date": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#creationDateTime"
          },
          "intendedUse": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#intendedUse"
          },
          "meansOfTransportation": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#usedTransportMeans"
          },
          "plantProductsImported": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#specifiedProduct"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ587PlantImportApplication"
      },
      "USDAPPQ587PlantImportPermit": {
        "@context": {
          "applicant": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "intendedUse": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#intendedUse"
          },
          "shipment": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#transportPackage"
          },
          "signatureDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#issueDateTime"
          }
        },
        "@id": "https://w3id.org/traceability#USDAPPQ587PlantImportPermit"
      },
      "USDASpecialtyCrops237AForm": {
        "@context": {
          "additionalRemarks": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#remarks"
          },
          "anticipatedAuditDate": {
            "@id": "https://www.gs1.org/voc/certificationAuditDate"
          },
          "applicant": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "auditProgramsRequested": {
            "@id": "https://www.gs1.org/voc/certificationType"
          },
          "auditee": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#associatedParty"
          },
          "billingAccountNumber": {
            "@id": "https://schema.org/accountId"
          },
          "commoditiesCovered": {
            "@id": "https://www.gs1.org/voc/certificationSubject"
          },
          "locations": {
            "@id": "https://schema.org/location"
          },
          "requestDate": {
            "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#reportSubmissionDateTime"
          },
          "totalArea": {
            "@id": "https://www.gs1.org/voc/grossArea"
          }
        },
        "@id": "https://w3id.org/traceability#USDASpecialtyCrops237AForm"
      },
      "USMCACertificationOfOrigin": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#USMCACertificationOfOrigin"
      },
      "USMCACertifier": {
        "@context": {
          "certifierDetails": {
            "@id": "https://w3id.org/traceability#certifierDetails"
          },
          "role": {
            "@id": "https://w3id.org/traceability#certifierRole"
          }
        },
        "@id": "https://w3id.org/traceability/USMCACertifier"
      },
      "USMCAProductSpecifier": {
        "@context": {
          "countryOfOrigin": {
            "@id": "https://w3id.org/traceability#countryOfOrigin"
          },
          "exporterDetails": {
            "@id": "https://w3id.org/traceability#exporterDetails"
          },
          "importerDetails": {
            "@id": "https://w3id.org/traceability#importerDetails"
          },
          "importerUnknown": {
            "@id": "https://w3id.org/traceability#importerUnknown"
          },
          "originCriterion": {
            "@id": "https://w3id.org/traceability#originCriterion"
          },
          "producerConfidential": {
            "@id": "https://w3id.org/traceability#producerConfidential"
          },
          "producerDetails": {
            "@id": "https://schema.org/manufacturer"
          },
          "product": {
            "@id": "https://schema.org/Product"
          }
        },
        "@id": "https://w3id.org/traceability/USMCAProductSpecifier"
      },
      "UsdaSc6": {
        "@context": {
          "applicant": {
            "@id": "https://w3id.org/traceability#applicant"
          },
          "carrierId": {
            "@id": "https://w3id.org/traceability#carrierId"
          },
          "customsEntryNumber": {
            "@id": "https://w3id.org/traceability#customsEntryNumber"
          },
          "dateOfEntry": {
            "@id": "https://w3id.org/traceability#dateOfEntry"
          },
          "facility": {
            "@id": "https://www.gs1.org/voc/Place"
          },
          "importerSignatureDate": {
            "@id": "https://w3id.org/traceability#importerSignatureDate"
          },
          "inspectionDate": {
            "@id": "https://schema.org/DateTime"
          },
          "inspector": {
            "@id": "https://w3id.org/traceability#Inspector"
          },
          "intendedUse": {
            "@id": "https://w3id.org/traceability#intendedUse"
          },
          "intendedUseCert": {
            "@id": "https://w3id.org/traceability#intendedUseCert"
          },
          "lotId": {
            "@id": "https://w3id.org/traceability#lotId"
          },
          "serialNumber": {
            "@id": "https://w3id.org/traceability#serialNumber"
          },
          "shipment": {
            "@id": "https://w3id.org/traceability#AgricultureParcelDelivery"
          },
          "signatureDate": {
            "@id": "https://w3id.org/traceability#signatureDate"
          },
          "tariffCodeNumber": {
            "@id": "https://w3id.org/traceability#tariffCodeNumber"
          }
        },
        "@id": "https://w3id.org/traceability#UsdaSc6"
      },
      "VerifiableBusinessCard": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#VerifiableBusinessCard"
      },
      "VerifiablePostmanCollection": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#VerifiablePostmanCollection"
      },
      "VerifiableScorecard": {
        "@context": {
        },
        "@id": "https://w3id.org/traceability#VerifiableScorecard"
      },
      "Workflow": {
        "@context": {
          "definition": {
            "@id": "https://w3id.org/traceability/#workflow-definition"
          },
          "instance": {
            "@id": "https://w3id.org/traceability/#workflow-instance"
          }
        },
        "@id": "https://w3id.org/traceability#Workflow"
      },
      "dateOfExport": {
        "@id": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#exportExitDateTime",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
      },
      "description": "https://schema.org/description",
      "id": "@id",
      "identifier": "https://schema.org/identifier",
      "image": {
        "@id": "https://schema.org/image",
        "@type": "@id"
      },
      "items": "https://schema.org/ItemList",
      "manufacturer": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manufacturerParty",
      "manufacturingCountry": "https://service.unece.org/trade/uncefact/vocabulary/uncefact/#manufactureCountry",
      "name": "https://schema.org/name",
      "product": "https://w3id.org/traceability#SteelProduct",
      "rawMaterial": "https://w3id.org/traceability#rawMaterial",
      "relatedLink": {
        "@id": "https://w3id.org/traceability#LinkRole"
      },
      "type": "@type"
    }
  }