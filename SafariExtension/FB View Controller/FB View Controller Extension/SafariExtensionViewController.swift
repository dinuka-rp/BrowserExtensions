//
//  SafariExtensionViewController.swift
//  FB View Controller Extension
//
//  Created by Dinuka Piyadigama on 3/24/20.
//  Copyright © 2020 Dinuka Piyadigama. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
